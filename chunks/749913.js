n.d(t, { Z: () => ed }), n(388685), n(781311), n(290780);
var a = n(54381),
    r = n(473749),
    i = n(120356),
    l = n.n(i),
    s = n(512722),
    o = n.n(s),
    c = n(55160),
    d = n(924826),
    u = n(91192),
    m = n(536895),
    f = n(374470),
    h = n(442837),
    g = n(680874),
    x = n(28664),
    b = n(481060),
    p = n(430742),
    j = n(166459),
    v = n(541716),
    C = n(67158),
    y = n(893718),
    T = n(472243),
    w = n(923664),
    S = n(284182),
    N = n(795639),
    O = n(957730),
    I = n(25015),
    P = n(252032),
    E = n(216572),
    _ = n(913663),
    R = n(268350),
    M = n(456077),
    Z = n(488131),
    k = n(602034),
    A = n(23750),
    L = n(703558),
    F = n(496675),
    D = n(300429),
    H = n(117530),
    z = n(594174),
    B = n(459273),
    U = n(838440),
    G = n(127654),
    V = n(681154),
    W = n(883429),
    q = n(945141),
    X = n(456269),
    K = n(228392),
    Y = n(259637),
    J = n(76451),
    Q = n(470623),
    $ = n(479099),
    ee = n(399894),
    et = n(81490),
    en = n(710352),
    ea = n(981631),
    er = n(176505),
    ei = n(388032),
    el = n(225941);
function es(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            a = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (a = a.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            a.forEach(function (t) {
                var a;
                (a = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: a,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = a);
            });
    }
    return e;
}
function eo(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var a = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, a);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let ec = v.Ie.CREATE_FORUM_POST;
function ed(e) {
    let { parentChannel: t, isSearchLoading: n, numResults: i, onChange: s, canCreatePost: o, inputRef: d } = e,
        u = !(0, E.HL)(t) && o,
        {
            textAreaState: m,
            formOpen: g,
            previewing: x,
        } = (0, Q.xH)((e) => {
            let { textAreaState: t, formOpen: n, previewing: a } = e;
            return {
                textAreaState: t,
                formOpen: n,
                previewing: a,
            };
        }, c.X),
        [b, p] = r.useState(null),
        j = r.useContext(B.oo),
        v = r.useCallback(() => {
            j.bumpDispatchPriority();
        }, [j]),
        C = (0, h.e7)([F.Z], () => F.Z.can(ea.Plq.ATTACH_FILES, t)),
        y = (0, h.Wu)([H.Z], () => H.Z.getUploads(t.id, L.d.FirstThreadMessage)),
        T = g && C && u,
        w = (null == t ? void 0 : t.isMediaChannel()) === !0,
        I = (function (e, t) {
            let n = (0, Q.AF)(),
                a = (0, X.ql)(e);
            return r.useCallback(() => {
                let {
                    formOpen: r,
                    setFormOpenFromUserAction: i,
                    name: l,
                    textAreaState: s,
                    hasClickedForm: o,
                } = n.getState();
                !r &&
                    (setTimeout(() => {
                        if ((0, f.kK)(t.current, HTMLTextAreaElement)) {
                            var e;
                            null == (e = t.current) || e.focus();
                        }
                    }, 0),
                    ((o && l.length > 0) ||
                        (s.textValue.trim().length > 0 && s.textValue.trim() !== a) ||
                        H.Z.getUploads(e.id, L.d.FirstThreadMessage).length > 0) &&
                        i());
            }, [n, e.id, a, t]);
        })(t, d),
        P = (function (e) {
            let { formOpen: t } = (0, Q.xH)((e) => {
                    let { formOpen: t } = e;
                    return { formOpen: t };
                }, c.X),
                n = (0, Q.AF)(),
                a = (0, k.r)({ parentChannel: e });
            r.useEffect(() => {
                let { setNameError: e, setMessageError: t } = n.getState();
                e(null), t(null);
            }, [t, n]);
            let i = r.useCallback(
                (t, a, r) => {
                    let { name: i, textAreaState: l } = n.getState();
                    null == t && (t = l.textValue), (t = t.trim());
                    let { content: s } = O.ZP.parse(e, t);
                    if (((t = s), null == a || 0 === a.length)) {
                        var o;
                        a = null == (o = _.Z.getStickerPreview(e.id, ec.drafts.type)) ? void 0 : o.map((e) => e.id);
                    }
                    if (
                        ((null == r || 0 === r.length) && (r = H.Z.getUploads(e.id, L.d.FirstThreadMessage)),
                        null != r && r.length > 0 && e.isMediaChannel())
                    ) {
                        let e = r.findIndex((e) => !0 === e.isThumbnail);
                        if (e > -1) {
                            let t = r[e];
                            r.splice(e, 1), r.unshift(t);
                        }
                    }
                    let c = 0 === i.length,
                        d = (null == t || 0 === t.length) && (null == a || 0 === a.length) && 0 === r.length;
                    return {
                        content: t,
                        stickers: a,
                        uploads: r,
                        hasNameError: c,
                        hasMessageError: d,
                    };
                },
                [e, n],
            );
            return r.useCallback(
                async (t, r, l) => {
                    let {
                            setNameError: s,
                            setMessageError: o,
                            setSubmitting: c,
                            resetFormState: d,
                            formOpen: u,
                            setFormOpen: m,
                            setPreviewing: f,
                            setFormOpenFromUserAction: h,
                            setGuidelinesOpen: g,
                        } = n.getState(),
                        x = q.Z.hasSeen(e.id);
                    if (!u)
                        return (
                            (0, K.P_)({
                                guildId: e.guild_id,
                                channelId: e.id,
                            }),
                            x || n.getState().setGuidelinesOpen(!0),
                            h(),
                            {
                                shouldClear: !1,
                                shouldRefocus: !1,
                            }
                        );
                    let { content: b, stickers: p, uploads: j, hasNameError: v, hasMessageError: C } = i(t, r, l);
                    if ((s(v ? (0, V.V_)() : null), o(C ? (0, V.T4)() : null), v || C))
                        return {
                            shouldClear: !1,
                            shouldRefocus: !0,
                        };
                    try {
                        c(!0);
                        let { valid: t } = await (0, U.v)({
                            content: b,
                            stickers: p,
                            uploads: j,
                            type: ec,
                            channel: e,
                        });
                        if (!t)
                            return {
                                shouldClear: !1,
                                shouldRefocus: !0,
                            };
                        let n = await a(b, p, j);
                        return (
                            (0, Z.ok)(n),
                            W.Z.resort(e.id),
                            (0, R.qB)(e.id, ec.drafts.type),
                            d(),
                            m(!1),
                            f(!1),
                            q.Z.markAsSeen(e.id),
                            g(!1),
                            {
                                shouldClear: !0,
                                shouldRefocus: !1,
                            }
                        );
                    } catch (t) {
                        var y, T;
                        return (
                            (null == (y = t.body) ? void 0 : y.code) === ea.evJ.AUTOMOD_TITLE_BLOCKED
                                ? s((0, V.Gx)(t.body, e))
                                : (null == (T = t.body) ? void 0 : T.code) === ea.evJ.AUTOMOD_MESSAGE_BLOCKED &&
                                  o((0, V.Gx)(t.body, e)),
                            {
                                shouldClear: !1,
                                shouldRefocus: !0,
                            }
                        );
                    } finally {
                        c(!1);
                    }
                },
                [a, i, e, n],
            );
        })(t);
    return (
        r.useLayoutEffect(s, [g, m, y, s]),
        (0, a.jsx)(a.Fragment, {
            children: (0, a.jsx)("div", {
                "aria-label": u ? ei.intl.string(ei.t.dq7mAa) : ei.intl.string(ei.t["5h0QOP"]),
                className: l()(el.container, { [el.collapsed]: !g }),
                onClick: !g && u ? I : void 0,
                children: (0, a.jsxs)("form", {
                    onMouseDown: v,
                    onFocus: v,
                    onSubmit: (e) => {
                        e.preventDefault(), u && P();
                    },
                    children: [
                        (0, a.jsxs)("div", {
                            className: el.formContainer,
                            children: [
                                (0, a.jsx)(eu, {
                                    parentChannel: t,
                                    isSearchLoading: n,
                                    inputRef: d,
                                }),
                                (0, a.jsxs)("div", {
                                    className: x ? el.previewForm : el.form,
                                    children: [
                                        (0, a.jsx)(em, {
                                            editorRef: b,
                                            parentChannel: t,
                                            isSearchLoading: n,
                                            numResults: i,
                                            inputRef: d,
                                            canCreatePost: u,
                                        }),
                                        g &&
                                            (0, a.jsx)(eg, {
                                                editorRef: b,
                                                setEditorRef: p,
                                                parentChannel: t,
                                                submit: P,
                                                disabled: !u,
                                            }),
                                        x && (0, a.jsx)(ex, {}),
                                    ],
                                }),
                                T && (w ? (0, a.jsx)(N._, { parentChannel: t }) : (0, a.jsx)(J.Z, { channelId: t.id })),
                            ],
                        }),
                        (0, a.jsxs)("div", {
                            className: el.form,
                            children: [
                                T && w && (0, a.jsx)(S.Z, { parentChannel: t }),
                                g &&
                                    (0, a.jsx)(ev, {
                                        className: el.horizontalPadding,
                                        parentChannel: t,
                                        canCreatePost: u,
                                    }),
                            ],
                        }),
                    ],
                }),
            }),
        })
    );
}
let eu = r.memo(function (e) {
        let { parentChannel: t, isSearchLoading: n, inputRef: i } = e,
            {
                formOpen: l,
                name: s,
                textAreaState: o,
                hasClickedForm: d,
                submitting: u,
            } = (0, Q.xH)((e) => {
                let {
                    formOpen: t,
                    nameError: n,
                    name: a,
                    previewing: r,
                    textAreaState: i,
                    hasClickedForm: l,
                    submitting: s,
                } = e;
                return {
                    formOpen: t,
                    nameError: n,
                    name: a,
                    textAreaState: i,
                    previewing: r,
                    hasClickedForm: l,
                    submitting: s,
                };
            }, c.X),
            m = (0, Q.AF)(),
            f = (0, X.ql)(t),
            h = r.useCallback(() => {
                var e;
                m.getState().resetFormState(),
                    p.Z.clearDraft(t.id, L.d.ThreadSettings),
                    p.Z.clearDraft(t.id, L.d.FirstThreadMessage),
                    j.Z.clearAll(t.id, L.d.FirstThreadMessage),
                    m.getState().setFormOpen(!1),
                    m.getState().setBodyFocused(!1),
                    m.getState().setTitleFocused(!1),
                    m.getState().setHasClickedForm(!1),
                    m.getState().setPreviewing(!1),
                    null == (e = i.current) || e.blur(),
                    (0, K.Oq)({
                        guildId: t.guild_id,
                        channelId: t.id,
                    });
            }, [m, t.id, t.guild_id, i]),
            g = r.useMemo(
                () =>
                    !l &&
                    (s.trim().length > 0 ||
                        (o.textValue.trim().length > 0 && o.textValue.trim() !== f) ||
                        H.Z.getUploads(t.id, L.d.FirstThreadMessage).length > 0) &&
                    d
                        ? (0, a.jsx)(b.vdY, {
                              size: "md",
                              color: "currentColor",
                              className: el.pencilIcon,
                          })
                        : (0, a.jsx)(b.BK9, {
                              onClear: h,
                              hasContent: l,
                              isLoading: n || u,
                              size: "md",
                          }),
                [n, l, d, s, o.textValue, h, t.id, f, u],
            );
        return (0, a.jsx)("div", {
            className: el.prefixElement,
            children: g,
        });
    }),
    em = r.memo(function (e) {
        let { parentChannel: t, inputRef: n, canCreatePost: i, editorRef: l, isSearchLoading: s, numResults: d } = e,
            {
                formOpen: u,
                nameError: m,
                name: f,
                textAreaState: x,
                previewing: p,
            } = (0, Q.xH)((e) => {
                let {
                    formOpen: t,
                    nameError: n,
                    name: a,
                    previewing: r,
                    textAreaState: i,
                    hasClickedForm: l,
                    submitting: s,
                } = e;
                return {
                    formOpen: t,
                    nameError: n,
                    name: a,
                    textAreaState: i,
                    previewing: r,
                    hasClickedForm: l,
                    submitting: s,
                };
            }, c.X),
            j = (0, Q.AF)(),
            v = null != t.topic && 0 !== t.topic.length,
            C = q.Z.hasSeen(t.id),
            y = (0, X.ql)(t),
            T = (0, h.e7)([z.default], () => z.default.getCurrentUser());
        o()(null != T, "current user cannot be null"),
            (0, B.yp)({
                event: ea.CkL.FOCUS_COMPOSER_TITLE,
                handler: () => {
                    let e = n.current;
                    null == e || e.focus(),
                        j.getState().setTitleFocused(!0),
                        j.getState().setFormOpen(!0),
                        j.getState().setHasClickedForm(!0);
                },
            });
        let w = r.useCallback(
                async (e) => {
                    let n = e.clipboardData.files[0];
                    null != n &&
                        n.type.startsWith("image/") &&
                        (e.preventDefault(),
                        await (0, G.d)([n], t, L.d.FirstThreadMessage, { origin: "clipboard" }),
                        j.getState().setFormOpenFromUserAction());
                },
                [t, j],
            ),
            S = (0, V.Op)(m, { content: f });
        return (0, a.jsxs)("div", {
            className: el.titleContainer,
            onPaste: w,
            children: [
                u && p
                    ? (0, a.jsx)(b.Heading, {
                          variant: "heading-md/semibold",
                          className: el.title,
                          children: f,
                      })
                    : (0, a.jsxs)(b.Kqy, {
                          gap: 4,
                          children: [
                              (0, a.jsx)(g.l, {
                                  value: f,
                                  placeholder: i
                                      ? u || (x.textValue.length > 0 && x.textValue.trim() !== y)
                                          ? ei.intl.string(ei.t.lU4dDS)
                                          : ei.intl.string(ei.t.CjmivA)
                                      : ei.intl.string(ei.t["5h0QOP"]),
                                  rows: 1,
                                  maxLength: ea.HN8,
                                  onChange: (e) => {
                                      let n = e.target.value,
                                          a = (0, M.Z)(n, !1);
                                      j.getState().setName(a);
                                      let r = 0 === a.trim().length,
                                          i = 0 === x.textValue.trim().length,
                                          l = x.textValue.trim() === y;
                                      r && (i || l) && j.getState().setHasClickedForm(!1),
                                          u || W.Z.updateForumSearchQuery(t.id, a);
                                  },
                                  onFocus: () => {
                                      j.getState().setTitleFocused(!0), j.getState().setBodyFocused(!1);
                                  },
                                  onBlur: () => {
                                      j.getState().setTitleFocused(!1);
                                      let e = (0, M.Z)(f, !0);
                                      e !== f && (j.getState().setName(e), u || W.Z.updateForumSearchQuery(t.id, e));
                                  },
                                  onKeyDown: (e) => {
                                      "Enter" === e.key &&
                                          (e.preventDefault(),
                                          e.stopPropagation(),
                                          u && f.length > 0
                                              ? null == l || l.focus()
                                              : i && e.shiftKey
                                                ? ((0, K.nH)({
                                                      guildId: t.guild_id,
                                                      channelId: t.id,
                                                  }),
                                                  v && !C && j.getState().setGuidelinesOpen(!0),
                                                  j.getState().setFormOpenFromUserAction(),
                                                  f.trim().length > 0 &&
                                                      (j.getState().setBodyFocused(!0), null == l || l.focus()))
                                                : u ||
                                                  !(f.length > 0) ||
                                                  null != d ||
                                                  s ||
                                                  W.Z.updateForumSearchQuery(t.id, f));
                                      let a = n.current;
                                      if ("Home" === e.key || "End" === e.key) {
                                          if (null == a) return;
                                          if ((e.preventDefault(), e.stopPropagation(), "Home" === e.key)) {
                                              let t = e.shiftKey ? Math.max(a.selectionStart, a.selectionEnd) : 0;
                                              a.setSelectionRange(0, t, "backward");
                                          } else {
                                              let t = e.shiftKey
                                                      ? Math.min(a.selectionStart, a.selectionEnd)
                                                      : f.length,
                                                  n = f.length;
                                              a.setSelectionRange(t, n, "forward");
                                          }
                                      }
                                      if ("Escape" === e.key && !j.getState().submitting) {
                                          var r;
                                          null == (r = n.current) || r.blur(),
                                              j.getState().setFormOpen(!1),
                                              j.getState().setTitleFocused(!1),
                                              j.getState().setBodyFocused(!1),
                                              j.getState().setPreviewing(!1);
                                      }
                                  },
                                  className: el.title,
                                  ref: n,
                              }),
                              null != S ? (0, a.jsx)(b.pdY, { error: S }) : null,
                          ],
                      }),
                u
                    ? null
                    : (0, a.jsxs)(b.Kqy, {
                          direction: "horizontal",
                          gap: 8,
                          justify: "end",
                          fullWidth: !1,
                          children: [
                              (0, a.jsx)(ef, { parentChannel: t }),
                              (0, a.jsx)(eC, {
                                  parentChannel: t,
                                  canCreatePost: i,
                              }),
                          ],
                      }),
            ],
        });
    });
function ef(e) {
    let { parentChannel: t } = e,
        { guidelinesOpen: n } = (0, Q.xH)((e) => {
            let { guidelinesOpen: t } = e;
            return { guidelinesOpen: t };
        }, c.X),
        r = (0, Q.AF)();
    return null != t.topic && 0 !== t.topic.length
        ? (0, a.jsx)(x.u, {
              text: ei.intl.string(ei.t["4d4T4l"]),
              children: (0, a.jsx)(b.hU, {
                  size: "sm",
                  variant: "secondary",
                  onClick: () => {
                      r.getState().setGuidelinesOpen(!n);
                  },
                  icon: b.snC,
                  "aria-label": ei.intl.string(ei.t["4d4T4l"]),
              }),
          })
        : null;
}
let eh = r.memo(function (e) {
        let { parentChannel: t, textValue: n } = e,
            r = new A.ZP({
                channel_id: t.id,
                content: n,
            }),
            { content: i } = (0, I.Z)(r, {
                hideSimpleEmbedContent: !0,
                isInteracting: !1,
                formatInline: !1,
                allowList: !0,
                allowHeading: !0,
                previewLinkTarget: !0,
                allowLinks: !0,
            }),
            s = (0, P.Z)(
                {
                    message: r,
                    channel: t,
                    compact: !1,
                },
                i,
                !1,
            );
        return (0, a.jsx)("div", {
            className: l()(el.channelTextAreaInner, el.previewTextArea),
            children: s,
        });
    }),
    eg = r.memo(function (e) {
        let { parentChannel: t, submit: n, disabled: i = !1, editorRef: s, setEditorRef: d } = e,
            u = (0, h.e7)([z.default], () => z.default.getCurrentUser());
        o()(null != u, "current user cannot be null");
        let {
                messageError: m,
                previewing: f,
                textAreaState: g,
                bodyFocused: x,
                formOpen: p,
            } = (0, Q.xH)((e) => {
                let { messageError: t, textAreaState: n, previewing: a, bodyFocused: r, formOpen: i } = e;
                return {
                    messageError: t,
                    textAreaState: n,
                    previewing: a,
                    bodyFocused: r,
                    formOpen: i,
                };
            }, c.X),
            j = (0, Q.AF)();
        r.useEffect(
            () => () =>
                (0, K.Vn)({
                    guildId: t.guild_id,
                    channelId: t.id,
                }),
            [t.guild_id, t.id],
        );
        let v = r.useCallback(() => {
                j.getState().setBodyFocused(!0);
            }, [j]),
            C = r.useCallback(() => {
                j.getState().setBodyFocused(!1);
            }, [j]),
            T = r.useCallback(
                (e, t, n) => {
                    let { setTextAreaState: a } = j.getState();
                    a({
                        textValue: t,
                        richValue: n,
                    });
                },
                [j],
            ),
            w = r.useCallback(
                (e) => {
                    let { value: t, uploads: a, stickers: r } = e;
                    return n(t, r, a);
                },
                [n],
            );
        (0, B.yp)({
            event: ea.CkL.TEXTAREA_FOCUS,
            handler: v,
        }),
            (0, B.yp)({
                event: ea.CkL.TEXTAREA_BLUR,
                handler: C,
            });
        let S = (0, V.Op)(m, { content: g.textValue });
        return (0, a.jsx)("div", {
            className: el.bodyContainer,
            children: (0, a.jsxs)("div", {
                className: el.contentContainer,
                children: [
                    f
                        ? (0, a.jsx)(eh, {
                              parentChannel: t,
                              textValue: g.textValue,
                          })
                        : (0, a.jsx)("div", {
                              onClick: v,
                              children: (0, a.jsx)(y.ZP, {
                                  type: ec,
                                  setEditorRef: d,
                                  channel: t,
                                  placeholder: ei.intl.string(ei.t["8IPnv1"]),
                                  textValue: g.textValue,
                                  richValue: g.richValue,
                                  focused: x,
                                  className: el.channelTextArea,
                                  innerClassName: l()(el.channelTextAreaInner, {
                                      [el.channelTextAreaInnerError]: null != S,
                                  }),
                                  onChange: T,
                                  onSubmit: w,
                                  promptToUpload: G.d,
                                  disabled: i,
                                  onKeyDown: (e) => {
                                      ("ArrowUp" === e.key || "ArrowDown" === e.key) && e.stopPropagation(),
                                          p &&
                                              "Escape" === e.key &&
                                              !j.getState().submitting &&
                                              (null == s || s.blur(),
                                              j.getState().setFormOpen(!1),
                                              j.getState().setTitleFocused(!1),
                                              j.getState().setBodyFocused(!1),
                                              j.getState().setPreviewing(!1));
                                  },
                                  autoCompletePosition: "bottom",
                              }),
                          }),
                    (0, a.jsx)(b.pdY, { error: S }),
                ],
            }),
        });
    });
function ex() {
    return (0, a.jsx)("div", {
        className: el.previewModeIndicator,
        children: (0, a.jsx)(b.Text, {
            variant: "text-sm/normal",
            color: "interactive-text-default",
            children: ei.intl.string(ei.t["WE/cYo"]),
        }),
    });
}
function eb(e) {
    let { textAreaState: t } = (0, Q.xH)((e) => {
            let { textAreaState: t } = e;
            return { textAreaState: t };
        }, c.X),
        n = (0, h.Wu)([H.Z], () => H.Z.getUploads(e.id, L.d.FirstThreadMessage));
    return r.useMemo(() => t.textValue.trim().length > 0 || n.length > 0, [t.textValue, n]);
}
function ep(e) {
    let t = eb(e),
        { appliedTags: n, name: a } = (0, Q.xH)((e) => {
            let { appliedTags: t, name: n } = e;
            return {
                appliedTags: t,
                name: n,
            };
        }, c.X);
    return r.useMemo(() => e.hasFlag(er.zZ.REQUIRE_TAG) && 0 === n.size && a.length > 0 && t, [n, a, e, t]);
}
function ej() {
    let { previewing: e } = (0, Q.xH)((e) => {
            let { previewing: t } = e;
            return { previewing: t };
        }, c.X),
        t = (0, Q.AF)(),
        n = r.useCallback(() => {
            t.getState().setPreviewing(!e), (0, K.nE)();
        }, [e, t]),
        i = e ? ei.intl.string(ei.t.ojM1xJ) : ei.intl.string(ei.t.SKNnqq);
    return (0, a.jsx)(x.u, {
        text: i,
        children: (0, a.jsx)(b.hU, {
            variant: "secondary",
            size: "sm",
            onClick: n,
            icon: e ? b.kZF : b.tEF,
            "aria-label": i,
        }),
    });
}
let ev = r.memo(function (e) {
    let { parentChannel: t, canCreatePost: n, className: i } = e,
        { textAreaState: l, name: s } = (0, Q.xH)((e) => {
            let { textAreaState: t, name: n } = e;
            return {
                textAreaState: t,
                name: n,
            };
        }, c.X),
        { rateLimitPerUser: o } = t,
        d = o > 0,
        u = (0, h.e7)([D.Z], () => D.Z.getSlowmodeCooldownGuess(t.id, D.S.CreateThread)),
        m = (0, w.w)(t, D.S.CreateThread),
        f = ep(t),
        g = (0, Q.AF)(),
        x = r.useCallback(() => {
            g.getState().setBodyFocused(!1);
        }, [g]),
        p = r.useMemo(() => "" !== s.trim() && "" !== l.textValue.trim(), [s, l.textValue]);
    return (
        r.useEffect(() => {
            p || g.getState().setPreviewing(!1);
        }, [p, g]),
        (0, a.jsxs)("div", {
            className: i,
            children: [
                (0, a.jsx)(eT, { parentChannel: t }),
                (0, a.jsx)("div", { className: el.tagsDivider }),
                (0, a.jsxs)("div", {
                    className: el.controlsContainer,
                    children: [
                        (0, a.jsxs)("div", {
                            className: el.controls,
                            children: [
                                (0, a.jsxs)("div", {
                                    className: el.wrappedControls,
                                    children: [
                                        (0, a.jsx)(T.Z, {
                                            type: ec,
                                            textValue: l.textValue,
                                            className: el.characterCount,
                                        }),
                                        d &&
                                            (0, a.jsx)(ee.Z, {
                                                rateLimitPerUser: o,
                                                slowmodeCooldownGuess: u,
                                                isBypassSlowmode: m,
                                                leadingIcon: !0,
                                            }),
                                    ],
                                }),
                                (0, a.jsx)(ef, { parentChannel: t }),
                                p && (0, a.jsx)(ej, {}),
                                (0, a.jsx)(eC, {
                                    parentChannel: t,
                                    disableIfInvalid: !0,
                                    canCreatePost: n,
                                    disabled: d && !m && u > 0,
                                }),
                            ],
                        }),
                        (0, a.jsx)(
                            C.Z,
                            {
                                type: ec,
                                className: el.expressionPicker,
                                onClick: x,
                                channel: t,
                            },
                            "expression",
                        ),
                    ],
                }),
                f &&
                    (0, a.jsx)(b.Text, {
                        variant: "text-sm/medium",
                        color: "text-feedback-critical",
                        className: el.requiredError,
                        children: ei.intl.string(ei.t.xPfNQi),
                    }),
            ],
        })
    );
});
function eC(e) {
    let { parentChannel: t, canCreatePost: n, disabled: r, disableIfInvalid: i = !1 } = e,
        l = (0, E.HL)(t),
        {
            submitting: s,
            name: o,
            formOpen: d,
        } = (0, Q.xH)((e) => {
            let { submitting: t, name: n, formOpen: a } = e;
            return {
                submitting: t,
                name: n,
                formOpen: a,
            };
        }, c.X),
        u = eb(t),
        m = !ep(t) && u && o.trim().length > 0;
    return __OVERLAY__ || l
        ? null
        : (0, a.jsx)(b.Button, {
              variant: "primary",
              type: "submit",
              size: "sm",
              loading: s,
              disabled: (i && !m) || r || !n,
              icon: b.kBi,
              text: d ? ei.intl.string(ei.t.pIuQI6) : ei.intl.string(ei.t.TyAuoT),
          });
}
function ey() {
    return Promise.resolve();
}
function eT(e) {
    let { parentChannel: t } = e,
        {
            appliedTags: n,
            toggleAppliedTag: i,
            setPopoutOpen: s,
        } = (0, Q.xH)((e) => {
            let { appliedTags: t, toggleAppliedTag: n, setPopoutOpen: a } = e;
            return {
                appliedTags: t,
                toggleAppliedTag: n,
                setPopoutOpen: a,
            };
        }, c.X),
        o = n.size >= en.Cn,
        f = (0, d.ZP)({
            id: "".concat(t.id, "-post-form-tags-navigator"),
            isEnabled: !0,
            wrap: !0,
            scrollToStart: ey,
            scrollToEnd: ey,
            orientation: m.hy.HORIZONTAL,
        }),
        { containerRef: h, containerWidth: g } = (0, et.Z)(),
        x = r.useRef(null),
        p = r.useRef(null),
        [j, v] = r.useState(!0),
        C = (0, X.Vm)(t),
        [y, T] = r.useState(0);
    return (r.useLayoutEffect(() => {
        var e;
        let t = x.current,
            n = null == t || null == (e = t.children) ? void 0 : e[0],
            a = null == t || null == n || n.clientHeight > t.clientHeight;
        if ((a !== j && v(a), a && null != h.current && null != n && null != n.children)) {
            let { left: e, top: t } = h.current.getBoundingClientRect(),
                a = 0;
            for (let r of n.children) {
                let { right: n, top: i, height: l } = r.getBoundingClientRect();
                if (i - t > l) break;
                n - e > a && (a = n - e);
            }
            T(a);
        }
    }, [C, j, h, g]),
    0 === C.length)
        ? null
        : (0, a.jsxs)("div", {
              className: el.tagsContainer,
              ref: h,
              children: [
                  (0, a.jsx)(b.lO_, {
                      size: "xs",
                      color: "currentColor",
                      className: el.tagsIcon,
                  }),
                  (0, a.jsx)("div", {
                      className: el.tagList,
                      ref: x,
                      children: (0, a.jsx)(u.bG, {
                          navigator: f,
                          children: (0, a.jsx)(u.SJ, {
                              children: (e) => {
                                  var { ref: t } = e,
                                      r = (function (e, t) {
                                          if (null == e) return {};
                                          var n,
                                              a,
                                              r = (function (e, t) {
                                                  if (null == e) return {};
                                                  var n,
                                                      a,
                                                      r = {},
                                                      i = Object.keys(e);
                                                  for (a = 0; a < i.length; a++)
                                                      (n = i[a]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                                                  return r;
                                              })(e, t);
                                          if (Object.getOwnPropertySymbols) {
                                              var i = Object.getOwnPropertySymbols(e);
                                              for (a = 0; a < i.length; a++)
                                                  (n = i[a]),
                                                      !(t.indexOf(n) >= 0) &&
                                                          Object.prototype.propertyIsEnumerable.call(e, n) &&
                                                          (r[n] = e[n]);
                                          }
                                          return r;
                                      })(e, ["ref"]);
                                  return (0, a.jsx)(
                                      "div",
                                      eo(
                                          es(
                                              {
                                                  className: el.tagListInner,
                                                  ref: t,
                                              },
                                              r,
                                          ),
                                          {
                                              children: C.map((e) =>
                                                  (0, a.jsx)(
                                                      $.Z,
                                                      {
                                                          ariaLabel: ei.intl.formatToPlainString(ei.t.FSZVIR, {
                                                              tagName: e.name,
                                                          }),
                                                          tag: e,
                                                          onClick: o && !n.has(e.id) ? void 0 : () => i(e.id),
                                                          disabled: !n.has(e.id) && n.size >= en.Cn,
                                                          selected: n.has(e.id),
                                                          size: $.Z.Sizes.SMALL,
                                                      },
                                                      e.id,
                                                  ),
                                              ),
                                          },
                                      ),
                                  );
                              },
                          }),
                      }),
                  }),
                  j &&
                      (0, a.jsx)(b.yRy, {
                          targetElementRef: p,
                          onRequestOpen: () => s(!0),
                          onRequestClose: () => s(!1),
                          renderPopout: (e) => {
                              let { closePopout: r } = e;
                              return (0, a.jsx)(Y.Z, {
                                  parentChannel: t,
                                  appliedTags: n,
                                  maxTagsApplied: o,
                                  onSelectTag: i,
                                  onClose: r,
                              });
                          },
                          position: "bottom",
                          align: "center",
                          children: (e) =>
                              (0, a.jsx)("div", {
                                  ref: p,
                                  className: el.tagsButton,
                                  style: { left: y },
                                  children: (0, a.jsx)(
                                      b.Button,
                                      eo(es({}, e), {
                                          size: "sm",
                                          variant: "secondary",
                                          icon: b.CJ0,
                                          iconPosition: "end",
                                          text: ei.intl.string(ei.t.w6T0Yc),
                                      }),
                                  ),
                              }),
                      }),
                  (0, a.jsx)("div", {
                      className: l()(el.tagsButton, el.tagsButtonPlaceholder),
                      children: (0, a.jsx)(b.Button, {
                          size: "sm",
                          variant: "secondary",
                          icon: b.CJ0,
                          iconPosition: "end",
                          text: ei.intl.string(ei.t.w6T0Yc),
                      }),
                  }),
              ],
          });
}
