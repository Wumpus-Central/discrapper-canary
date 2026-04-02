"use strict";
n.d(t, { A: () => er }), n(667532);
var l = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(284009),
    o = n.n(r),
    d = n(942381),
    c = n(884362),
    u = n(837381),
    m = n(741918),
    h = n(621466),
    x = n(311907),
    g = n(189812),
    f = n(990078),
    _ = n(397927),
    p = n(465532),
    j = n(608299),
    b = n(355622),
    v = n(530134),
    A = n(133343),
    C = n(257108),
    T = n(960850),
    N = n(255370),
    S = n(969488),
    y = n(451909),
    E = n(538355),
    I = n(91624),
    R = n(715757),
    M = n(931664),
    w = n(631576),
    k = n(474078),
    L = n(747926),
    P = n(55294),
    D = n(383233),
    O = n(31717),
    F = n(576705),
    U = n(101392),
    G = n(522602),
    z = n(287809),
    H = n(234320),
    B = n(460350),
    V = n(518960),
    W = n(265463),
    K = n(919577),
    q = n(774812),
    $ = n(435470),
    J = n(853742),
    X = n(337337),
    Q = n(302487),
    Y = n(218152),
    Z = n(376310),
    ee = n(230397),
    et = n(337666);
n(253913);
var en = n(652215),
    el = n(746080),
    ei = n(985018),
    es = n(805241);
let ea = b.oU.CREATE_FORUM_POST;
function er(e) {
    var t, n;
    let s,
        r,
        { parentChannel: o, isSearchLoading: c, numResults: u, onChange: m, canCreatePost: g, inputRef: f } = e,
        _ = !(0, R.V)(o) && g,
        {
            textAreaState: p,
            formOpen: j,
            previewing: b,
        } = (0, Y.kU)((e) => {
            let { textAreaState: t, formOpen: n, previewing: l } = e;
            return { textAreaState: t, formOpen: n, previewing: l };
        }, d.x),
        [v, A] = i.useState(null),
        C = i.useContext(H.EH),
        T = i.useCallback(() => {
            C.bumpDispatchPriority();
        }, [C]),
        E = (0, x.bG)([F.A], () => F.A.can(en.xBc.ATTACH_FILES, o)),
        I = (0, x.yK)([G.A], () => G.A.getUploads(o.id, O.C.FirstThreadMessage)),
        k = j && E && _,
        D = o?.isMediaChannel() === !0,
        U =
            ((t = o),
            (n = f),
            (s = (0, Y.ST)()),
            (r = (0, $.Hv)(t)),
            i.useCallback(() => {
                let {
                    formOpen: e,
                    setFormOpenFromUserAction: l,
                    name: i,
                    textAreaState: a,
                    hasClickedForm: o,
                } = s.getState();
                !e &&
                    (setTimeout(() => {
                        (0, h.vq)(n.current, HTMLTextAreaElement) && n.current?.focus();
                    }, 0),
                    ((o && i.length > 0) ||
                        (a.textValue.trim().length > 0 && a.textValue.trim() !== r) ||
                        G.A.getUploads(t.id, O.C.FirstThreadMessage).length > 0) &&
                        l());
            }, [s, t.id, r, n])),
        z = (function (e) {
            let { formOpen: t } = (0, Y.kU)((e) => {
                    let { formOpen: t } = e;
                    return { formOpen: t };
                }, d.x),
                n = (0, Y.ST)(),
                l = (0, P.N)({ parentChannel: e });
            i.useEffect(() => {
                let { setNameError: e, setMessageError: t } = n.getState();
                e(null), t(null);
            }, [t, n]);
            let s = i.useCallback(
                (t, l, i) => {
                    let { name: s, textAreaState: a } = n.getState();
                    null == t && (t = a.textValue), (t = t.trim());
                    let { content: r } = y.Ay.parse(e, t);
                    if (
                        ((t = r),
                        (null == l || 0 === l.length) &&
                            (l = M.A.getStickerPreview(e.id, ea.drafts.type)?.map((e) => e.id)),
                        (null == i || 0 === i.length) && (i = G.A.getUploads(e.id, O.C.FirstThreadMessage)),
                        null != i && i.length > 0 && e.isMediaChannel())
                    ) {
                        let e = i.findIndex((e) => !0 === e.isThumbnail);
                        if (e > -1) {
                            let t = i[e];
                            i.splice(e, 1), i.unshift(t);
                        }
                    }
                    let o = 0 === s.length,
                        d = (null == t || 0 === t.length) && (null == l || 0 === l.length) && 0 === i.length;
                    return { content: t, stickers: l, uploads: i, hasNameError: o, hasMessageError: d };
                },
                [e, n],
            );
            return i.useCallback(
                async (t, i, a) => {
                    let {
                            setNameError: r,
                            setMessageError: o,
                            setSubmitting: d,
                            resetFormState: c,
                            formOpen: u,
                            setFormOpen: m,
                            setPreviewing: h,
                            setFormOpenFromUserAction: x,
                            setGuidelinesOpen: g,
                        } = n.getState(),
                        f = q.A.hasSeen(e.id);
                    if (!u)
                        return (
                            (0, J.jr)({ guildId: e.guild_id, channelId: e.id }),
                            f || n.getState().setGuidelinesOpen(!0),
                            x(),
                            { shouldClear: !1, shouldRefocus: !1 }
                        );
                    let { content: _, stickers: p, uploads: j, hasNameError: b, hasMessageError: v } = s(t, i, a);
                    if ((r(b ? (0, W.uW)() : null), o(v ? (0, W.fo)() : null), b || v))
                        return { shouldClear: !1, shouldRefocus: !0 };
                    try {
                        d(!0);
                        let { valid: t } = await (0, B.i)({
                            content: _,
                            stickers: p,
                            uploads: j,
                            type: ea,
                            channel: e,
                        });
                        if (!t) return { shouldClear: !1, shouldRefocus: !0 };
                        let n = await l(_, p, j);
                        return (
                            (0, L.JA)(n),
                            K.A.resort(e.id),
                            (0, w.x5)(e.id, ea.drafts.type),
                            c(),
                            m(!1),
                            h(!1),
                            q.A.markAsSeen(e.id),
                            g(!1),
                            { shouldClear: !0, shouldRefocus: !1 }
                        );
                    } catch (t) {
                        return (
                            t.body?.code === en.t02.AUTOMOD_TITLE_BLOCKED
                                ? r((0, W.z0)(t.body, e))
                                : t.body?.code === en.t02.AUTOMOD_MESSAGE_BLOCKED
                                  ? o((0, W.z0)(t.body, e))
                                  : t.body?.code === en.t02.INVALID_FORM_BODY &&
                                    t.body?.errors?.name != null &&
                                    r((0, W.R0)()),
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
        i.useLayoutEffect(m, [j, p, I, m]),
        (0, l.jsx)(l.Fragment, {
            children: (0, l.jsx)("div", {
                "aria-label": _ ? ei.intl.string(ei.t.dq7mAa) : ei.intl.string(ei.t["5h0QOP"]),
                className: a()(es.kL, { [es.yZ]: !j }),
                onClick: !j && _ ? U : void 0,
                children: (0, l.jsxs)("form", {
                    onMouseDown: T,
                    onFocus: T,
                    onSubmit: (e) => {
                        e.preventDefault(), _ && z();
                    },
                    children: [
                        (0, l.jsxs)("div", {
                            className: es.KJ,
                            children: [
                                (0, l.jsx)(eo, { parentChannel: o, isSearchLoading: c, inputRef: f }),
                                (0, l.jsxs)("div", {
                                    className: b ? es.vJ : es.Zd,
                                    children: [
                                        (0, l.jsx)(ed, {
                                            editorRef: v,
                                            parentChannel: o,
                                            isSearchLoading: c,
                                            numResults: u,
                                            inputRef: f,
                                            canCreatePost: _,
                                        }),
                                        j &&
                                            (0, l.jsx)(em, {
                                                editorRef: v,
                                                setEditorRef: A,
                                                parentChannel: o,
                                                submit: z,
                                                disabled: !_,
                                            }),
                                        b && (0, l.jsx)(eh, {}),
                                    ],
                                }),
                                k && (D ? (0, l.jsx)(S.f, { parentChannel: o }) : (0, l.jsx)(Q.h, { channelId: o.id })),
                            ],
                        }),
                        (0, l.jsxs)("div", {
                            className: es.Zd,
                            children: [
                                k && D && (0, l.jsx)(N.A, { parentChannel: o }),
                                j && (0, l.jsx)(e_, { className: es.CN, parentChannel: o, canCreatePost: _ }),
                            ],
                        }),
                    ],
                }),
            }),
        })
    );
}
let eo = i.memo(function (e) {
        let { parentChannel: t, isSearchLoading: n, inputRef: s } = e,
            {
                formOpen: a,
                name: r,
                textAreaState: o,
                hasClickedForm: c,
                submitting: u,
            } = (0, Y.kU)((e) => {
                let {
                    formOpen: t,
                    nameError: n,
                    name: l,
                    previewing: i,
                    textAreaState: s,
                    hasClickedForm: a,
                    submitting: r,
                } = e;
                return {
                    formOpen: t,
                    nameError: n,
                    name: l,
                    textAreaState: s,
                    previewing: i,
                    hasClickedForm: a,
                    submitting: r,
                };
            }, d.x),
            m = (0, Y.ST)(),
            h = (0, $.Hv)(t),
            x = i.useCallback(() => {
                m.getState().resetFormState(),
                    p.A.clearDraft(t.id, O.C.ThreadSettings),
                    p.A.clearDraft(t.id, O.C.FirstThreadMessage),
                    j.A.clearAll(t.id, O.C.FirstThreadMessage),
                    m.getState().setFormOpen(!1),
                    m.getState().setBodyFocused(!1),
                    m.getState().setTitleFocused(!1),
                    m.getState().setHasClickedForm(!1),
                    m.getState().setPreviewing(!1),
                    s.current?.blur(),
                    (0, J.py)({ guildId: t.guild_id, channelId: t.id });
            }, [m, t.id, t.guild_id, s]),
            g = i.useMemo(
                () =>
                    !a &&
                    (r.trim().length > 0 ||
                        (o.textValue.trim().length > 0 && o.textValue.trim() !== h) ||
                        G.A.getUploads(t.id, O.C.FirstThreadMessage).length > 0) &&
                    c
                        ? (0, l.jsx)(_.R2l, { size: "md", color: "currentColor", className: es.rD })
                        : (0, l.jsx)(_.BT5, { onClear: x, hasContent: a, isLoading: n || u, size: "md" }),
                [n, a, c, r, o.textValue, x, t.id, h, u],
            );
        return (0, l.jsx)("div", { className: es.VB, children: g });
    }),
    ed = i.memo(function (e) {
        let { parentChannel: t, inputRef: n, canCreatePost: s, editorRef: a, isSearchLoading: r, numResults: c } = e,
            {
                formOpen: u,
                nameError: m,
                name: h,
                textAreaState: f,
                previewing: p,
            } = (0, Y.kU)((e) => {
                let {
                    formOpen: t,
                    nameError: n,
                    name: l,
                    previewing: i,
                    textAreaState: s,
                    hasClickedForm: a,
                    submitting: r,
                } = e;
                return {
                    formOpen: t,
                    nameError: n,
                    name: l,
                    textAreaState: s,
                    previewing: i,
                    hasClickedForm: a,
                    submitting: r,
                };
            }, d.x),
            j = (0, Y.ST)(),
            b = null != t.topic && 0 !== t.topic.length,
            v = q.A.hasSeen(t.id),
            A = (0, $.Hv)(t),
            C = (0, x.bG)([z.default], () => z.default.getCurrentUser());
        o()(null != C, "current user cannot be null"),
            (0, H.Vo)({
                event: en.jej.FOCUS_COMPOSER_TITLE,
                handler: () => {
                    let e = n.current;
                    e?.focus(),
                        j.getState().setTitleFocused(!0),
                        j.getState().setFormOpen(!0),
                        j.getState().setHasClickedForm(!0);
                },
            });
        let T = i.useCallback(
                async (e) => {
                    let n = e.clipboardData.files[0];
                    null != n &&
                        n.type.startsWith("image/") &&
                        (e.preventDefault(),
                        await (0, V.R)([n], t, O.C.FirstThreadMessage, { origin: "clipboard" }),
                        j.getState().setFormOpenFromUserAction());
                },
                [t, j],
            ),
            N = (0, W.vr)(m, { content: h });
        return (0, l.jsxs)("div", {
            className: es.gn,
            onPaste: T,
            children: [
                u && p
                    ? (0, l.jsx)(_.Heading, { variant: "heading-md/semibold", className: es.DD, children: h })
                    : (0, l.jsxs)(_.BJc, {
                          gap: 4,
                          children: [
                              (0, l.jsx)(g.d, {
                                  value: h,
                                  placeholder: s
                                      ? u || (f.textValue.length > 0 && f.textValue.trim() !== A)
                                          ? ei.intl.string(ei.t.lU4dDS)
                                          : ei.intl.string(ei.t.CjmivA)
                                      : ei.intl.string(ei.t["5h0QOP"]),
                                  rows: 1,
                                  maxLength: en.Ign,
                                  onChange: (e) => {
                                      let n = e.target.value,
                                          l = (0, k.A)(n, !1);
                                      j.getState().setName(l);
                                      let i = 0 === l.trim().length,
                                          s = 0 === f.textValue.trim().length,
                                          a = f.textValue.trim() === A;
                                      i && (s || a) && j.getState().setHasClickedForm(!1),
                                          u || K.A.updateForumSearchQuery(t.id, l);
                                  },
                                  onFocus: () => {
                                      j.getState().setTitleFocused(!0), j.getState().setBodyFocused(!1);
                                  },
                                  onBlur: () => {
                                      j.getState().setTitleFocused(!1);
                                      let e = (0, k.A)(h, !0);
                                      e !== h && (j.getState().setName(e), u || K.A.updateForumSearchQuery(t.id, e));
                                  },
                                  onKeyDown: (e) => {
                                      "Enter" === e.key &&
                                          (e.preventDefault(),
                                          e.stopPropagation(),
                                          u && h.length > 0
                                              ? a?.focus()
                                              : s && e.shiftKey
                                                ? ((0, J.sB)({ guildId: t.guild_id, channelId: t.id }),
                                                  b && !v && j.getState().setGuidelinesOpen(!0),
                                                  j.getState().setFormOpenFromUserAction(),
                                                  h.trim().length > 0 && (j.getState().setBodyFocused(!0), a?.focus()))
                                                : u ||
                                                  !(h.length > 0) ||
                                                  null != c ||
                                                  r ||
                                                  K.A.updateForumSearchQuery(t.id, h));
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
                                          j.getState().submitting ||
                                          (n.current?.blur(),
                                          j.getState().setFormOpen(!1),
                                          j.getState().setTitleFocused(!1),
                                          j.getState().setBodyFocused(!1),
                                          j.getState().setPreviewing(!1));
                                  },
                                  className: es.DD,
                                  ref: n,
                              }),
                              null != N ? (0, l.jsx)(_.dzK, { error: N }) : null,
                          ],
                      }),
                u
                    ? null
                    : (0, l.jsxs)(_.BJc, {
                          direction: "horizontal",
                          gap: 8,
                          justify: "end",
                          fullWidth: !1,
                          children: [
                              (0, l.jsx)(ec, { parentChannel: t }),
                              (0, l.jsx)(ep, { parentChannel: t, canCreatePost: s }),
                          ],
                      }),
            ],
        });
    });
function ec(e) {
    let { parentChannel: t } = e,
        { guidelinesOpen: n } = (0, Y.kU)((e) => {
            let { guidelinesOpen: t } = e;
            return { guidelinesOpen: t };
        }, d.x),
        i = (0, Y.ST)();
    return null != t.topic && 0 !== t.topic.length
        ? (0, l.jsx)(f.m, {
              text: ei.intl.string(ei.t["4d4T4l"]),
              children: (0, l.jsx)(_.K0, {
                  size: "sm",
                  variant: "secondary",
                  onClick: () => {
                      i.getState().setGuidelinesOpen(!n);
                  },
                  icon: _.B8Q,
                  "aria-label": ei.intl.string(ei.t["4d4T4l"]),
              }),
          })
        : null;
}
let eu = i.memo(function (e) {
        let { parentChannel: t, textValue: n } = e,
            i = new D.Ay({ channel_id: t.id, content: n }),
            { content: s } = (0, E.A)(i, {
                hideSimpleEmbedContent: !0,
                isInteracting: !1,
                formatInline: !1,
                allowList: !0,
                allowHeading: !0,
                previewLinkTarget: !0,
                allowLinks: !0,
            }),
            r = (0, I.A)({ message: i, channel: t, compact: !1 }, s, !1);
        return (0, l.jsx)("div", { className: a()(es.SL, es.ly), children: r });
    }),
    em = i.memo(function (e) {
        let { parentChannel: t, submit: n, disabled: s = !1, editorRef: r, setEditorRef: c } = e,
            u = (0, x.bG)([z.default], () => z.default.getCurrentUser());
        o()(null != u, "current user cannot be null");
        let {
                messageError: m,
                previewing: h,
                textAreaState: g,
                bodyFocused: f,
                formOpen: p,
            } = (0, Y.kU)((e) => {
                let { messageError: t, textAreaState: n, previewing: l, bodyFocused: i, formOpen: s } = e;
                return { messageError: t, textAreaState: n, previewing: l, bodyFocused: i, formOpen: s };
            }, d.x),
            j = (0, Y.ST)();
        i.useEffect(() => () => (0, J._4)({ guildId: t.guild_id, channelId: t.id }), [t.guild_id, t.id]);
        let b = i.useCallback(() => {
                j.getState().setBodyFocused(!0);
            }, [j]),
            v = i.useCallback(() => {
                j.getState().setBodyFocused(!1);
            }, [j]),
            C = i.useCallback(
                (e, t, n) => {
                    let { setTextAreaState: l } = j.getState();
                    l({ textValue: t, richValue: n });
                },
                [j],
            ),
            T = i.useCallback(
                (e) => {
                    let { value: t, uploads: l, stickers: i } = e;
                    return n(t, i, l);
                },
                [n],
            );
        (0, H.Vo)({ event: en.jej.TEXTAREA_FOCUS, handler: b }), (0, H.Vo)({ event: en.jej.TEXTAREA_BLUR, handler: v });
        let N = (0, W.vr)(m, { content: g.textValue });
        return (0, l.jsx)("div", {
            className: es.IP,
            children: (0, l.jsxs)("div", {
                className: es.hQ,
                children: [
                    h
                        ? (0, l.jsx)(eu, { parentChannel: t, textValue: g.textValue })
                        : (0, l.jsx)("div", {
                              onClick: b,
                              children: (0, l.jsx)(A.Ay, {
                                  type: ea,
                                  setEditorRef: c,
                                  channel: t,
                                  placeholder: ei.intl.string(ei.t["8IPnv1"]),
                                  textValue: g.textValue,
                                  richValue: g.richValue,
                                  focused: f,
                                  className: es.gM,
                                  innerClassName: a()(es.SL, { [es.cr]: null != N }),
                                  onChange: C,
                                  onSubmit: T,
                                  promptToUpload: V.R,
                                  disabled: s,
                                  onKeyDown: (e) => {
                                      ("ArrowUp" === e.key || "ArrowDown" === e.key) && e.stopPropagation(),
                                          p &&
                                              "Escape" === e.key &&
                                              !j.getState().submitting &&
                                              (r?.blur(),
                                              j.getState().setFormOpen(!1),
                                              j.getState().setTitleFocused(!1),
                                              j.getState().setBodyFocused(!1),
                                              j.getState().setPreviewing(!1));
                                  },
                                  autoCompletePosition: "bottom",
                              }),
                          }),
                    (0, l.jsx)(_.dzK, { error: N }),
                ],
            }),
        });
    });
function eh() {
    return (0, l.jsx)("div", {
        className: es.fv,
        children: (0, l.jsx)(_.Text, {
            variant: "text-sm/normal",
            color: "interactive-text-default",
            children: ei.intl.string(ei.t["WE/cYo"]),
        }),
    });
}
function ex(e) {
    let { textAreaState: t } = (0, Y.kU)((e) => {
            let { textAreaState: t } = e;
            return { textAreaState: t };
        }, d.x),
        n = (0, x.yK)([G.A], () => G.A.getUploads(e.id, O.C.FirstThreadMessage));
    return i.useMemo(() => t.textValue.trim().length > 0 || n.length > 0, [t.textValue, n]);
}
function eg(e) {
    let t = ex(e),
        { appliedTags: n, name: l } = (0, Y.kU)((e) => {
            let { appliedTags: t, name: n } = e;
            return { appliedTags: t, name: n };
        }, d.x);
    return i.useMemo(() => e.hasFlag(el.lx.REQUIRE_TAG) && 0 === n.size && l.length > 0 && t, [n, l, e, t]);
}
function ef() {
    let { previewing: e } = (0, Y.kU)((e) => {
            let { previewing: t } = e;
            return { previewing: t };
        }, d.x),
        t = (0, Y.ST)(),
        n = i.useCallback(() => {
            t.getState().setPreviewing(!e), (0, J.Q_)();
        }, [e, t]),
        s = e ? ei.intl.string(ei.t.ojM1xJ) : ei.intl.string(ei.t.SKNnqq);
    return (0, l.jsx)(f.m, {
        text: s,
        children: (0, l.jsx)(_.K0, {
            variant: "secondary",
            size: "sm",
            onClick: n,
            icon: e ? _.G3N : _.bMW,
            "aria-label": s,
        }),
    });
}
let e_ = i.memo(function (e) {
    let { parentChannel: t, canCreatePost: n, className: s } = e,
        { textAreaState: a, name: r } = (0, Y.kU)((e) => {
            let { textAreaState: t, name: n } = e;
            return { textAreaState: t, name: n };
        }, d.x),
        { rateLimitPerUser: o } = t,
        c = o > 0,
        u = (0, x.bG)([U.A], () => U.A.getSlowmodeCooldownGuess(t.id, U.R.CreateThread)),
        m = (0, T._)(t, U.R.CreateThread),
        h = eg(t),
        g = (0, Y.ST)(),
        f = i.useCallback(() => {
            g.getState().setBodyFocused(!1);
        }, [g]),
        p = i.useMemo(() => "" !== r.trim() && "" !== a.textValue.trim(), [r, a.textValue]);
    return (
        i.useEffect(() => {
            p || g.getState().setPreviewing(!1);
        }, [p, g]),
        (0, l.jsxs)("div", {
            className: s,
            children: [
                (0, l.jsx)(eb, { parentChannel: t }),
                (0, l.jsx)("div", { className: es.XJ }),
                (0, l.jsxs)("div", {
                    className: es.gO,
                    children: [
                        (0, l.jsxs)("div", {
                            className: es.ne,
                            children: [
                                (0, l.jsxs)("div", {
                                    className: es.Kk,
                                    children: [
                                        (0, l.jsx)(C.A, { type: ea, textValue: a.textValue, className: es.Dq }),
                                        c &&
                                            (0, l.jsx)(ee.A, {
                                                rateLimitPerUser: o,
                                                slowmodeCooldownGuess: u,
                                                isBypassSlowmode: m,
                                                leadingIcon: !0,
                                            }),
                                    ],
                                }),
                                (0, l.jsx)(ec, { parentChannel: t }),
                                p && (0, l.jsx)(ef, {}),
                                (0, l.jsx)(ep, {
                                    parentChannel: t,
                                    disableIfInvalid: !0,
                                    canCreatePost: n,
                                    disabled: c && !m && u > 0,
                                }),
                            ],
                        }),
                        (0, l.jsx)(v.A, { type: ea, className: es.n1, onClick: f, channel: t }, "expression"),
                    ],
                }),
                h &&
                    (0, l.jsx)(_.Text, {
                        variant: "text-sm/medium",
                        color: "text-feedback-critical",
                        className: es.ku,
                        children: ei.intl.string(ei.t.xPfNQi),
                    }),
            ],
        })
    );
});
function ep(e) {
    let { parentChannel: t, canCreatePost: n, disabled: i, disableIfInvalid: s = !1 } = e,
        a = (0, R.V)(t),
        {
            submitting: r,
            name: o,
            formOpen: c,
        } = (0, Y.kU)((e) => {
            let { submitting: t, name: n, formOpen: l } = e;
            return { submitting: t, name: n, formOpen: l };
        }, d.x),
        u = ex(t),
        m = !eg(t) && u && o.trim().length > 0;
    return __OVERLAY__ || a
        ? null
        : (0, l.jsx)(_.Button, {
              variant: "primary",
              type: "submit",
              size: "sm",
              loading: r,
              disabled: (s && !m) || i || !n,
              icon: _.oyn,
              text: c ? ei.intl.string(ei.t.pIuQI6) : ei.intl.string(ei.t.TyAuoT),
          });
}
function ej() {
    return Promise.resolve();
}
function eb(e) {
    let { parentChannel: t } = e,
        {
            appliedTags: n,
            toggleAppliedTag: s,
            setPopoutOpen: r,
        } = (0, Y.kU)((e) => {
            let { appliedTags: t, toggleAppliedTag: n, setPopoutOpen: l } = e;
            return { appliedTags: t, toggleAppliedTag: n, setPopoutOpen: l };
        }, d.x),
        o = n.size >= 5,
        h = (0, c.Ay)({
            id: `${t.id}-post-form-tags-navigator`,
            isEnabled: !0,
            wrap: !0,
            scrollToStart: ej,
            scrollToEnd: ej,
            orientation: m.Gl.HORIZONTAL,
        }),
        { containerRef: x, containerWidth: g } = (0, et.A)(),
        f = i.useRef(null),
        p = i.useRef(null),
        [j, b] = i.useState(!0),
        v = (0, $.OT)(t),
        [A, C] = i.useState(0);
    return (i.useLayoutEffect(() => {
        let e = f.current,
            t = e?.children?.[0],
            n = null == e || null == t || t.clientHeight > e.clientHeight;
        if ((n !== j && b(n), n && null != x.current && null != t && null != t.children)) {
            let { left: e, top: n } = x.current.getBoundingClientRect(),
                l = 0;
            for (let i of t.children) {
                let { right: t, top: s, height: a } = i.getBoundingClientRect();
                if (s - n > a) break;
                t - e > l && (l = t - e);
            }
            C(l);
        }
    }, [v, j, x, g]),
    0 === v.length)
        ? null
        : (0, l.jsxs)("div", {
              className: es.Pc,
              ref: x,
              children: [
                  (0, l.jsx)(_.gqV, { size: "xs", color: "currentColor", className: es.HZ }),
                  (0, l.jsx)("div", {
                      className: es.kU,
                      ref: f,
                      children: (0, l.jsx)(u.hD, {
                          navigator: h,
                          children: (0, l.jsx)(u.PR, {
                              children: (e) => {
                                  let { ref: t, ...i } = e;
                                  return (0, l.jsx)("div", {
                                      className: es.j5,
                                      ref: t,
                                      ...i,
                                      children: v.map((e) =>
                                          (0, l.jsx)(
                                              Z.A,
                                              {
                                                  ariaLabel: ei.intl.formatToPlainString(ei.t.FSZVIR, {
                                                      tagName: e.name,
                                                  }),
                                                  tag: e,
                                                  onClick: o && !n.has(e.id) ? void 0 : () => s(e.id),
                                                  disabled: !n.has(e.id) && n.size >= 5,
                                                  selected: n.has(e.id),
                                                  size: Z.A.Sizes.SMALL,
                                              },
                                              e.id,
                                          ),
                                      ),
                                  });
                              },
                          }),
                      }),
                  }),
                  j &&
                      (0, l.jsx)(_.YNO, {
                          targetElementRef: p,
                          onRequestOpen: () => r(!0),
                          onRequestClose: () => r(!1),
                          renderPopout: (e) => {
                              let { closePopout: i } = e;
                              return (0, l.jsx)(X.A, {
                                  parentChannel: t,
                                  appliedTags: n,
                                  maxTagsApplied: o,
                                  onSelectTag: s,
                                  onClose: i,
                              });
                          },
                          position: "bottom",
                          align: "center",
                          children: (e) =>
                              (0, l.jsx)("div", {
                                  ref: p,
                                  className: es.Wk,
                                  style: { left: A },
                                  children: (0, l.jsx)(_.Button, {
                                      ...e,
                                      size: "sm",
                                      variant: "secondary",
                                      icon: _.abt,
                                      iconPosition: "end",
                                      text: ei.intl.string(ei.t.w6T0Yc),
                                  }),
                              }),
                      }),
                  (0, l.jsx)("div", {
                      className: a()(es.Wk, es.Dz),
                      children: (0, l.jsx)(_.Button, {
                          size: "sm",
                          variant: "secondary",
                          icon: _.abt,
                          iconPosition: "end",
                          text: ei.intl.string(ei.t.w6T0Yc),
                      }),
                  }),
              ],
          });
}
