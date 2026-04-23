"use strict";
n.d(t, { A: () => ev }), n(667532);
var l = n(627968),
    a = n(64700),
    s = n(503698),
    i = n.n(s),
    r = n(284009),
    o = n.n(r),
    d = n(942381),
    c = n(884362),
    u = n(837381),
    m = n(741918),
    h = n(621466),
    g = n(311907),
    x = n(189812),
    f = n(990078),
    _ = n(22231),
    p = n(884496),
    j = n(534514),
    b = n(331322),
    v = n(511274),
    C = n(408278),
    A = n(622629),
    N = n(834730),
    S = n(952270),
    E = n(39623),
    T = n(821609),
    y = n(534890),
    I = n(278416),
    w = n(265872),
    R = n(847374),
    k = n(465532),
    M = n(608299),
    L = n(355622),
    D = n(530134),
    P = n(133343),
    O = n(257108),
    F = n(960850),
    U = n(255370),
    z = n(969488),
    G = n(451909),
    B = n(538355),
    H = n(91624),
    V = n(715757),
    W = n(931664),
    q = n(631576),
    $ = n(474078),
    K = n(747926),
    X = n(55294),
    J = n(383233),
    Q = n(31717),
    Y = n(576705),
    Z = n(101392),
    ee = n(522602),
    et = n(287809),
    en = n(234320),
    el = n(460350),
    ea = n(518960),
    es = n(265463),
    ei = n(919577),
    er = n(774812),
    eo = n(435470),
    ed = n(853742),
    ec = n(337337),
    eu = n(302487),
    em = n(218152),
    eh = n(376310),
    eg = n(230397),
    ex = n(337666);
n(253913);
var ef = n(652215),
    e_ = n(746080),
    ep = n(985018),
    ej = n(955780);
let eb = L.oU.CREATE_FORUM_POST;
function ev(e) {
    var t, n;
    let s,
        r,
        { parentChannel: o, isSearchLoading: c, numResults: u, onChange: m, canCreatePost: x, inputRef: f } = e,
        _ = !(0, V.V)(o) && x,
        {
            textAreaState: p,
            formOpen: j,
            previewing: b,
        } = (0, em.kU)((e) => {
            let { textAreaState: t, formOpen: n, previewing: l } = e;
            return { textAreaState: t, formOpen: n, previewing: l };
        }, d.x),
        [v, C] = a.useState(null),
        A = a.useContext(en.EH),
        N = a.useCallback(() => {
            A.bumpDispatchPriority();
        }, [A]),
        S = (0, g.bG)([Y.A], () => Y.A.can(ef.xBc.ATTACH_FILES, o)),
        E = (0, g.yK)([ee.A], () => ee.A.getUploads(o.id, Q.C.FirstThreadMessage)),
        T = j && S && _,
        y = o?.isMediaChannel() === !0,
        I =
            ((t = o),
            (n = f),
            (s = (0, em.ST)()),
            (r = (0, eo.Hv)(t)),
            a.useCallback(() => {
                let {
                    formOpen: e,
                    setFormOpenFromUserAction: l,
                    name: a,
                    textAreaState: i,
                    hasClickedForm: o,
                } = s.getState();
                !e &&
                    (setTimeout(() => {
                        (0, h.vq)(n.current, HTMLTextAreaElement) && n.current?.focus();
                    }, 0),
                    ((o && a.length > 0) ||
                        (i.textValue.trim().length > 0 && i.textValue.trim() !== r) ||
                        ee.A.getUploads(t.id, Q.C.FirstThreadMessage).length > 0) &&
                        l());
            }, [s, t.id, r, n])),
        w = (function (e) {
            let { formOpen: t } = (0, em.kU)((e) => {
                    let { formOpen: t } = e;
                    return { formOpen: t };
                }, d.x),
                n = (0, em.ST)(),
                l = (0, X.N)({ parentChannel: e });
            a.useEffect(() => {
                let { setNameError: e, setMessageError: t } = n.getState();
                e(null), t(null);
            }, [t, n]);
            let s = a.useCallback(
                (t, l, a) => {
                    let { name: s, textAreaState: i } = n.getState();
                    null == t && (t = i.textValue), (t = t.trim());
                    let { content: r } = G.Ay.parse(e, t);
                    if (
                        ((t = r),
                        (null == l || 0 === l.length) &&
                            (l = W.A.getStickerPreview(e.id, eb.drafts.type)?.map((e) => e.id)),
                        (null == a || 0 === a.length) && (a = ee.A.getUploads(e.id, Q.C.FirstThreadMessage)),
                        null != a && a.length > 0 && e.isMediaChannel())
                    ) {
                        let e = a.findIndex((e) => !0 === e.isThumbnail);
                        if (e > -1) {
                            let t = a[e];
                            a.splice(e, 1), a.unshift(t);
                        }
                    }
                    let o = 0 === s.length,
                        d = (null == t || 0 === t.length) && (null == l || 0 === l.length) && 0 === a.length;
                    return { content: t, stickers: l, uploads: a, hasNameError: o, hasMessageError: d };
                },
                [e, n],
            );
            return a.useCallback(
                async (t, a, i) => {
                    let {
                            setNameError: r,
                            setMessageError: o,
                            setSubmitting: d,
                            resetFormState: c,
                            formOpen: u,
                            setFormOpen: m,
                            setPreviewing: h,
                            setFormOpenFromUserAction: g,
                            setGuidelinesOpen: x,
                        } = n.getState(),
                        f = er.A.hasSeen(e.id);
                    if (!u)
                        return (
                            (0, ed.jr)({ guildId: e.guild_id, channelId: e.id }),
                            f || n.getState().setGuidelinesOpen(!0),
                            g(),
                            { shouldClear: !1, shouldRefocus: !1 }
                        );
                    let { content: _, stickers: p, uploads: j, hasNameError: b, hasMessageError: v } = s(t, a, i);
                    if ((r(b ? (0, es.uW)() : null), o(v ? (0, es.fo)() : null), b || v))
                        return { shouldClear: !1, shouldRefocus: !0 };
                    try {
                        d(!0);
                        let { valid: t } = await (0, el.i)({
                            content: _,
                            stickers: p,
                            uploads: j,
                            type: eb,
                            channel: e,
                        });
                        if (!t) return { shouldClear: !1, shouldRefocus: !0 };
                        let n = await l(_, p, j);
                        return (
                            (0, K.JA)(n),
                            ei.A.resort(e.id),
                            (0, q.x5)(e.id, eb.drafts.type),
                            c(),
                            m(!1),
                            h(!1),
                            er.A.markAsSeen(e.id),
                            x(!1),
                            { shouldClear: !0, shouldRefocus: !1 }
                        );
                    } catch (t) {
                        return (
                            t.body?.code === ef.t02.AUTOMOD_TITLE_BLOCKED
                                ? r((0, es.z0)(t.body, e))
                                : t.body?.code === ef.t02.AUTOMOD_MESSAGE_BLOCKED
                                  ? o((0, es.z0)(t.body, e))
                                  : t.body?.code === ef.t02.INVALID_FORM_BODY &&
                                    t.body?.errors?.name != null &&
                                    r((0, es.R0)()),
                            { shouldClear: !1, shouldRefocus: !0 }
                        );
                    } finally {
                        d(!1);
                    }
                },
                [l, s, e, n],
            );
        })(o);
    return (
        a.useLayoutEffect(m, [j, p, E, m]),
        (0, l.jsx)(l.Fragment, {
            children: (0, l.jsx)("div", {
                "aria-label": _ ? ep.intl.string(ep.t.dq7mAa) : ep.intl.string(ep.t["5h0QOP"]),
                className: i()(ej.kL, { [ej.yZ]: !j }),
                onClick: !j && _ ? I : void 0,
                children: (0, l.jsxs)("form", {
                    onMouseDown: N,
                    onFocus: N,
                    onSubmit: (e) => {
                        e.preventDefault(), _ && w();
                    },
                    children: [
                        (0, l.jsxs)("div", {
                            className: ej.KJ,
                            children: [
                                (0, l.jsx)(eC, { parentChannel: o, isSearchLoading: c, inputRef: f }),
                                (0, l.jsxs)("div", {
                                    className: b ? ej.vJ : ej.Zd,
                                    children: [
                                        (0, l.jsx)(eA, {
                                            editorRef: v,
                                            parentChannel: o,
                                            isSearchLoading: c,
                                            numResults: u,
                                            inputRef: f,
                                            canCreatePost: _,
                                        }),
                                        j &&
                                            (0, l.jsx)(eE, {
                                                editorRef: v,
                                                setEditorRef: C,
                                                parentChannel: o,
                                                submit: w,
                                                disabled: !_,
                                            }),
                                        b && (0, l.jsx)(eT, {}),
                                    ],
                                }),
                                T &&
                                    (y ? (0, l.jsx)(z.f, { parentChannel: o }) : (0, l.jsx)(eu.h, { channelId: o.id })),
                            ],
                        }),
                        (0, l.jsxs)("div", {
                            className: ej.Zd,
                            children: [
                                T && y && (0, l.jsx)(U.A, { parentChannel: o }),
                                j && (0, l.jsx)(eR, { className: ej.CN, parentChannel: o, canCreatePost: _ }),
                            ],
                        }),
                    ],
                }),
            }),
        })
    );
}
let eC = a.memo(function (e) {
        let { parentChannel: t, isSearchLoading: n, inputRef: s } = e,
            {
                formOpen: i,
                name: r,
                textAreaState: o,
                hasClickedForm: c,
                submitting: u,
            } = (0, em.kU)((e) => {
                let {
                    formOpen: t,
                    nameError: n,
                    name: l,
                    previewing: a,
                    textAreaState: s,
                    hasClickedForm: i,
                    submitting: r,
                } = e;
                return {
                    formOpen: t,
                    nameError: n,
                    name: l,
                    textAreaState: s,
                    previewing: a,
                    hasClickedForm: i,
                    submitting: r,
                };
            }, d.x),
            m = (0, em.ST)(),
            h = (0, eo.Hv)(t),
            g = a.useCallback(() => {
                m.getState().resetFormState(),
                    k.A.clearDraft(t.id, Q.C.ThreadSettings),
                    k.A.clearDraft(t.id, Q.C.FirstThreadMessage),
                    M.A.clearAll(t.id, Q.C.FirstThreadMessage),
                    m.getState().setFormOpen(!1),
                    m.getState().setBodyFocused(!1),
                    m.getState().setTitleFocused(!1),
                    m.getState().setHasClickedForm(!1),
                    m.getState().setPreviewing(!1),
                    s.current?.blur(),
                    (0, ed.py)({ guildId: t.guild_id, channelId: t.id });
            }, [m, t.id, t.guild_id, s]),
            x = a.useMemo(
                () =>
                    !i &&
                    (r.trim().length > 0 ||
                        (o.textValue.trim().length > 0 && o.textValue.trim() !== h) ||
                        ee.A.getUploads(t.id, Q.C.FirstThreadMessage).length > 0) &&
                    c
                        ? (0, l.jsx)(_.R, { size: "md", color: "currentColor", className: ej.rD })
                        : (0, l.jsx)(p.B, { onClear: g, hasContent: i, isLoading: n || u, size: "md" }),
                [n, i, c, r, o.textValue, g, t.id, h, u],
            );
        return (0, l.jsx)("div", { className: ej.VB, children: x });
    }),
    eA = a.memo(function (e) {
        let { parentChannel: t, inputRef: n, canCreatePost: s, editorRef: i, isSearchLoading: r, numResults: c } = e,
            {
                formOpen: u,
                nameError: m,
                name: h,
                textAreaState: f,
                previewing: _,
            } = (0, em.kU)((e) => {
                let {
                    formOpen: t,
                    nameError: n,
                    name: l,
                    previewing: a,
                    textAreaState: s,
                    hasClickedForm: i,
                    submitting: r,
                } = e;
                return {
                    formOpen: t,
                    nameError: n,
                    name: l,
                    textAreaState: s,
                    previewing: a,
                    hasClickedForm: i,
                    submitting: r,
                };
            }, d.x),
            p = (0, em.ST)(),
            C = null != t.topic && 0 !== t.topic.length,
            A = er.A.hasSeen(t.id),
            N = (0, eo.Hv)(t),
            S = (0, g.bG)([et.default], () => et.default.getCurrentUser());
        o()(null != S, "current user cannot be null"),
            (0, en.Vo)({
                event: ef.jej.FOCUS_COMPOSER_TITLE,
                handler: () => {
                    let e = n.current;
                    e?.focus(),
                        p.getState().setTitleFocused(!0),
                        p.getState().setFormOpen(!0),
                        p.getState().setHasClickedForm(!0);
                },
            });
        let E = a.useCallback(
                async (e) => {
                    let n = e.clipboardData.files[0];
                    null != n &&
                        n.type.startsWith("image/") &&
                        (e.preventDefault(),
                        await (0, ea.R)([n], t, Q.C.FirstThreadMessage, { origin: "clipboard" }),
                        p.getState().setFormOpenFromUserAction());
                },
                [t, p],
            ),
            T = (0, es.vr)(m, { content: h });
        return (0, l.jsxs)("div", {
            className: ej.gn,
            onPaste: E,
            children: [
                u && _
                    ? (0, l.jsx)(j.D, { variant: "heading-md/semibold", className: ej.DD, children: h })
                    : (0, l.jsxs)(b.B, {
                          gap: 4,
                          children: [
                              (0, l.jsx)(x.d, {
                                  value: h,
                                  placeholder: s
                                      ? u || (f.textValue.length > 0 && f.textValue.trim() !== N)
                                          ? ep.intl.string(ep.t.lU4dDS)
                                          : ep.intl.string(ep.t.CjmivA)
                                      : ep.intl.string(ep.t["5h0QOP"]),
                                  rows: 1,
                                  maxLength: ef.Ign,
                                  onChange: (e) => {
                                      let n = e.target.value,
                                          l = (0, $.A)(n, !1);
                                      p.getState().setName(l);
                                      let a = 0 === l.trim().length,
                                          s = 0 === f.textValue.trim().length,
                                          i = f.textValue.trim() === N;
                                      a && (s || i) && p.getState().setHasClickedForm(!1),
                                          u || ei.A.updateForumSearchQuery(t.id, l);
                                  },
                                  onFocus: () => {
                                      p.getState().setTitleFocused(!0), p.getState().setBodyFocused(!1);
                                  },
                                  onBlur: () => {
                                      p.getState().setTitleFocused(!1);
                                      let e = (0, $.A)(h, !0);
                                      e !== h && (p.getState().setName(e), u || ei.A.updateForumSearchQuery(t.id, e));
                                  },
                                  onKeyDown: (e) => {
                                      "Enter" === e.key &&
                                          (e.preventDefault(),
                                          e.stopPropagation(),
                                          u && h.length > 0
                                              ? i?.focus()
                                              : s && e.shiftKey
                                                ? ((0, ed.sB)({ guildId: t.guild_id, channelId: t.id }),
                                                  C && !A && p.getState().setGuidelinesOpen(!0),
                                                  p.getState().setFormOpenFromUserAction(),
                                                  h.trim().length > 0 && (p.getState().setBodyFocused(!0), i?.focus()))
                                                : u ||
                                                  !(h.length > 0) ||
                                                  null != c ||
                                                  r ||
                                                  ei.A.updateForumSearchQuery(t.id, h));
                                      let l = n.current;
                                      if ("Home" === e.key || "End" === e.key) {
                                          if (null == l) return;
                                          if ((e.preventDefault(), e.stopPropagation(), "Home" === e.key)) {
                                              let t = e.shiftKey ? Math.max(l.selectionStart, l.selectionEnd) : 0;
                                              l.setSelectionRange(0, t, "backward");
                                          } else {
                                              let t = e.shiftKey
                                                      ? Math.min(l.selectionStart, l.selectionEnd)
                                                      : h.length,
                                                  n = h.length;
                                              l.setSelectionRange(t, n, "forward");
                                          }
                                      }
                                      "Escape" !== e.key ||
                                          p.getState().submitting ||
                                          (n.current?.blur(),
                                          p.getState().setFormOpen(!1),
                                          p.getState().setTitleFocused(!1),
                                          p.getState().setBodyFocused(!1),
                                          p.getState().setPreviewing(!1));
                                  },
                                  className: ej.DD,
                                  ref: n,
                              }),
                              null != T ? (0, l.jsx)(v.U, { error: T }) : null,
                          ],
                      }),
                u
                    ? null
                    : (0, l.jsxs)(b.B, {
                          direction: "horizontal",
                          gap: 8,
                          justify: "end",
                          fullWidth: !1,
                          children: [
                              (0, l.jsx)(eN, { parentChannel: t }),
                              (0, l.jsx)(ek, { parentChannel: t, canCreatePost: s }),
                          ],
                      }),
            ],
        });
    });
function eN(e) {
    let { parentChannel: t } = e,
        { guidelinesOpen: n } = (0, em.kU)((e) => {
            let { guidelinesOpen: t } = e;
            return { guidelinesOpen: t };
        }, d.x),
        a = (0, em.ST)();
    return null != t.topic && 0 !== t.topic.length
        ? (0, l.jsx)(f.m, {
              text: ep.intl.string(ep.t["4d4T4l"]),
              children: (0, l.jsx)(C.K, {
                  size: "sm",
                  variant: "secondary",
                  onClick: () => {
                      a.getState().setGuidelinesOpen(!n);
                  },
                  icon: A.B,
                  "aria-label": ep.intl.string(ep.t["4d4T4l"]),
              }),
          })
        : null;
}
let eS = a.memo(function (e) {
        let { parentChannel: t, textValue: n } = e,
            a = new J.Ay({ channel_id: t.id, content: n }),
            { content: s } = (0, B.A)(a, {
                hideSimpleEmbedContent: !0,
                formatInline: !1,
                allowList: !0,
                allowHeading: !0,
                previewLinkTarget: !0,
                allowLinks: !0,
            }),
            r = (0, H.A)({ message: a, channel: t, compact: !1 }, s, !1);
        return (0, l.jsx)("div", { className: i()(ej.SL, ej.ly), children: r });
    }),
    eE = a.memo(function (e) {
        let { parentChannel: t, submit: n, disabled: s = !1, editorRef: r, setEditorRef: c } = e,
            u = (0, g.bG)([et.default], () => et.default.getCurrentUser());
        o()(null != u, "current user cannot be null");
        let {
                messageError: m,
                previewing: h,
                textAreaState: x,
                bodyFocused: f,
                formOpen: _,
            } = (0, em.kU)((e) => {
                let { messageError: t, textAreaState: n, previewing: l, bodyFocused: a, formOpen: s } = e;
                return { messageError: t, textAreaState: n, previewing: l, bodyFocused: a, formOpen: s };
            }, d.x),
            p = (0, em.ST)();
        a.useEffect(() => () => (0, ed._4)({ guildId: t.guild_id, channelId: t.id }), [t.guild_id, t.id]);
        let j = a.useCallback(() => {
                p.getState().setBodyFocused(!0);
            }, [p]),
            b = a.useCallback(() => {
                p.getState().setBodyFocused(!1);
            }, [p]),
            C = a.useCallback(
                (e, t, n) => {
                    let { setTextAreaState: l } = p.getState();
                    l({ textValue: t, richValue: n });
                },
                [p],
            ),
            A = a.useCallback(
                (e) => {
                    let { value: t, uploads: l, stickers: a } = e;
                    return n(t, a, l);
                },
                [n],
            );
        (0, en.Vo)({ event: ef.jej.TEXTAREA_FOCUS, handler: j }),
            (0, en.Vo)({ event: ef.jej.TEXTAREA_BLUR, handler: b });
        let N = (0, es.vr)(m, { content: x.textValue });
        return (0, l.jsx)("div", {
            className: ej.IP,
            children: (0, l.jsxs)("div", {
                className: ej.hQ,
                children: [
                    h
                        ? (0, l.jsx)(eS, { parentChannel: t, textValue: x.textValue })
                        : (0, l.jsx)("div", {
                              onClick: j,
                              children: (0, l.jsx)(P.Ay, {
                                  type: eb,
                                  setEditorRef: c,
                                  channel: t,
                                  placeholder: ep.intl.string(ep.t["8IPnv1"]),
                                  textValue: x.textValue,
                                  richValue: x.richValue,
                                  focused: f,
                                  className: ej.gM,
                                  innerClassName: i()(ej.SL, { [ej.cr]: null != N }),
                                  onChange: C,
                                  onSubmit: A,
                                  promptToUpload: ea.R,
                                  disabled: s,
                                  onKeyDown: (e) => {
                                      ("ArrowUp" === e.key || "ArrowDown" === e.key) && e.stopPropagation(),
                                          _ &&
                                              "Escape" === e.key &&
                                              !p.getState().submitting &&
                                              (r?.blur(),
                                              p.getState().setFormOpen(!1),
                                              p.getState().setTitleFocused(!1),
                                              p.getState().setBodyFocused(!1),
                                              p.getState().setPreviewing(!1));
                                  },
                                  autoCompletePosition: "bottom",
                              }),
                          }),
                    (0, l.jsx)(v.U, { error: N }),
                ],
            }),
        });
    });
function eT() {
    return (0, l.jsx)("div", {
        className: ej.fv,
        children: (0, l.jsx)(N.E, {
            variant: "text-sm/normal",
            color: "interactive-text-default",
            children: ep.intl.string(ep.t["WE/cYo"]),
        }),
    });
}
function ey(e) {
    let { textAreaState: t } = (0, em.kU)((e) => {
            let { textAreaState: t } = e;
            return { textAreaState: t };
        }, d.x),
        n = (0, g.yK)([ee.A], () => ee.A.getUploads(e.id, Q.C.FirstThreadMessage));
    return a.useMemo(() => t.textValue.trim().length > 0 || n.length > 0, [t.textValue, n]);
}
function eI(e) {
    let t = ey(e),
        { appliedTags: n, name: l } = (0, em.kU)((e) => {
            let { appliedTags: t, name: n } = e;
            return { appliedTags: t, name: n };
        }, d.x);
    return a.useMemo(() => e.hasFlag(e_.lx.REQUIRE_TAG) && 0 === n.size && l.length > 0 && t, [n, l, e, t]);
}
function ew() {
    let { previewing: e } = (0, em.kU)((e) => {
            let { previewing: t } = e;
            return { previewing: t };
        }, d.x),
        t = (0, em.ST)(),
        n = a.useCallback(() => {
            t.getState().setPreviewing(!e), (0, ed.Q_)();
        }, [e, t]),
        s = e ? ep.intl.string(ep.t.ojM1xJ) : ep.intl.string(ep.t.SKNnqq);
    return (0, l.jsx)(f.m, {
        text: s,
        children: (0, l.jsx)(C.K, {
            variant: "secondary",
            size: "sm",
            onClick: n,
            icon: e ? S.G : E.b,
            "aria-label": s,
        }),
    });
}
let eR = a.memo(function (e) {
    let { parentChannel: t, canCreatePost: n, className: s } = e,
        { textAreaState: i, name: r } = (0, em.kU)((e) => {
            let { textAreaState: t, name: n } = e;
            return { textAreaState: t, name: n };
        }, d.x),
        { rateLimitPerUser: o } = t,
        c = o > 0,
        u = (0, g.bG)([Z.A], () => Z.A.getSlowmodeCooldownGuess(t.id, Z.R.CreateThread)),
        m = (0, F._)(t, Z.R.CreateThread),
        h = eI(t),
        x = (0, em.ST)(),
        f = a.useCallback(() => {
            x.getState().setBodyFocused(!1);
        }, [x]),
        _ = a.useMemo(() => "" !== r.trim() && "" !== i.textValue.trim(), [r, i.textValue]);
    return (
        a.useEffect(() => {
            _ || x.getState().setPreviewing(!1);
        }, [_, x]),
        (0, l.jsxs)("div", {
            className: s,
            children: [
                (0, l.jsx)(eL, { parentChannel: t }),
                (0, l.jsx)("div", { className: ej.XJ }),
                (0, l.jsxs)("div", {
                    className: ej.gO,
                    children: [
                        (0, l.jsxs)("div", {
                            className: ej.ne,
                            children: [
                                (0, l.jsxs)("div", {
                                    className: ej.Kk,
                                    children: [
                                        (0, l.jsx)(O.A, { type: eb, textValue: i.textValue, className: ej.Dq }),
                                        c &&
                                            (0, l.jsx)(eg.A, {
                                                rateLimitPerUser: o,
                                                slowmodeCooldownGuess: u,
                                                isBypassSlowmode: m,
                                                leadingIcon: !0,
                                            }),
                                    ],
                                }),
                                (0, l.jsx)(eN, { parentChannel: t }),
                                _ && (0, l.jsx)(ew, {}),
                                (0, l.jsx)(ek, {
                                    parentChannel: t,
                                    disableIfInvalid: !0,
                                    canCreatePost: n,
                                    disabled: c && !m && u > 0,
                                }),
                            ],
                        }),
                        (0, l.jsx)(D.A, { type: eb, className: ej.n1, onClick: f, channel: t }, "expression"),
                    ],
                }),
                h &&
                    (0, l.jsx)(N.E, {
                        variant: "text-sm/medium",
                        color: "text-feedback-critical",
                        className: ej.ku,
                        children: ep.intl.string(ep.t.xPfNQi),
                    }),
            ],
        })
    );
});
function ek(e) {
    let { parentChannel: t, canCreatePost: n, disabled: a, disableIfInvalid: s = !1 } = e,
        i = (0, V.V)(t),
        {
            submitting: r,
            name: o,
            formOpen: c,
        } = (0, em.kU)((e) => {
            let { submitting: t, name: n, formOpen: l } = e;
            return { submitting: t, name: n, formOpen: l };
        }, d.x),
        u = ey(t),
        m = !eI(t) && u && o.trim().length > 0;
    return __OVERLAY__ || i
        ? null
        : (0, l.jsx)(T.$, {
              variant: "primary",
              type: "submit",
              size: "sm",
              loading: r,
              disabled: (s && !m) || a || !n,
              icon: y.o,
              text: c ? ep.intl.string(ep.t.pIuQI6) : ep.intl.string(ep.t.TyAuoT),
          });
}
function eM() {
    return Promise.resolve();
}
function eL(e) {
    let { parentChannel: t } = e,
        {
            appliedTags: n,
            toggleAppliedTag: s,
            setPopoutOpen: r,
        } = (0, em.kU)((e) => {
            let { appliedTags: t, toggleAppliedTag: n, setPopoutOpen: l } = e;
            return { appliedTags: t, toggleAppliedTag: n, setPopoutOpen: l };
        }, d.x),
        o = n.size >= 5,
        h = (0, c.Ay)({
            id: `${t.id}-post-form-tags-navigator`,
            isEnabled: !0,
            wrap: !0,
            scrollToStart: eM,
            scrollToEnd: eM,
            orientation: m.Gl.HORIZONTAL,
        }),
        { containerRef: g, containerWidth: x } = (0, ex.A)(),
        f = a.useRef(null),
        _ = a.useRef(null),
        [p, j] = a.useState(!0),
        b = (0, eo.OT)(t),
        [v, C] = a.useState(0);
    return (a.useLayoutEffect(() => {
        let e = f.current,
            t = e?.children?.[0],
            n = null == e || null == t || t.clientHeight > e.clientHeight;
        if ((n !== p && j(n), n && null != g.current && null != t && null != t.children)) {
            let { left: e, top: n } = g.current.getBoundingClientRect(),
                l = 0;
            for (let a of t.children) {
                let { right: t, top: s, height: i } = a.getBoundingClientRect();
                if (s - n > i) break;
                t - e > l && (l = t - e);
            }
            C(l);
        }
    }, [b, p, g, x]),
    0 === b.length)
        ? null
        : (0, l.jsxs)("div", {
              className: ej.Pc,
              ref: g,
              children: [
                  (0, l.jsx)(I.g, { size: "xs", color: "currentColor", className: ej.HZ }),
                  (0, l.jsx)("div", {
                      className: ej.kU,
                      ref: f,
                      children: (0, l.jsx)(u.hD, {
                          navigator: h,
                          children: (0, l.jsx)(u.PR, {
                              children: (e) => {
                                  let { ref: t, ...a } = e;
                                  return (0, l.jsx)("div", {
                                      className: ej.j5,
                                      ref: t,
                                      ...a,
                                      children: b.map((e) =>
                                          (0, l.jsx)(
                                              eh.A,
                                              {
                                                  ariaLabel: ep.intl.formatToPlainString(ep.t.FSZVIR, {
                                                      tagName: e.name,
                                                  }),
                                                  tag: e,
                                                  onClick: o && !n.has(e.id) ? void 0 : () => s(e.id),
                                                  disabled: !n.has(e.id) && n.size >= 5,
                                                  selected: n.has(e.id),
                                                  size: eh.A.Sizes.SMALL,
                                              },
                                              e.id,
                                          ),
                                      ),
                                  });
                              },
                          }),
                      }),
                  }),
                  p &&
                      (0, l.jsx)(w.Y, {
                          targetElementRef: _,
                          onRequestOpen: () => r(!0),
                          onRequestClose: () => r(!1),
                          renderPopout: (e) => {
                              let { closePopout: a } = e;
                              return (0, l.jsx)(ec.A, {
                                  parentChannel: t,
                                  appliedTags: n,
                                  maxTagsApplied: o,
                                  onSelectTag: s,
                                  onClose: a,
                              });
                          },
                          position: "bottom",
                          align: "center",
                          children: (e) =>
                              (0, l.jsx)("div", {
                                  ref: _,
                                  className: ej.Wk,
                                  style: { left: v },
                                  children: (0, l.jsx)(T.$, {
                                      ...e,
                                      size: "sm",
                                      variant: "secondary",
                                      icon: R.a,
                                      iconPosition: "end",
                                      text: ep.intl.string(ep.t.w6T0Yc),
                                  }),
                              }),
                      }),
                  (0, l.jsx)("div", {
                      className: i()(ej.Wk, ej.Dz),
                      children: (0, l.jsx)(T.$, {
                          size: "sm",
                          variant: "secondary",
                          icon: R.a,
                          iconPosition: "end",
                          text: ep.intl.string(ep.t.w6T0Yc),
                      }),
                  }),
              ],
          });
}
