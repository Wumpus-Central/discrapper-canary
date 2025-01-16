n.d(t, {
    Z: function () {
        return ei;
    }
}),
    n(47120),
    n(733860);
var a = n(200651),
    i = n(192379),
    r = n(120356),
    l = n.n(r),
    s = n(512722),
    o = n.n(s),
    c = n(232713),
    d = n(924826),
    u = n(91192),
    m = n(536895),
    h = n(442837),
    g = n(481060),
    x = n(430742),
    f = n(166459),
    p = n(541716),
    C = n(67158),
    v = n(893718),
    b = n(472243),
    j = n(436660),
    _ = n(284182),
    I = n(795639),
    T = n(957730),
    N = n(25015),
    S = n(252032),
    w = n(913663),
    y = n(268350),
    E = n(456077),
    R = n(488131),
    P = n(602034),
    M = n(23750),
    k = n(703558),
    Z = n(496675),
    A = n(300429),
    L = n(117530),
    F = n(594174),
    O = n(459273),
    B = n(838440),
    z = n(127654),
    H = n(681154),
    D = n(883429),
    U = n(945141),
    V = n(456269),
    G = n(228392),
    W = n(259637),
    q = n(76451),
    X = n(470623),
    K = n(479099),
    J = n(399894),
    Y = n(81490),
    Q = n(710352),
    $ = n(981631),
    ee = n(176505),
    et = n(388032),
    en = n(40620);
let ea = p.Ie.CREATE_FORUM_POST;
function ei(e) {
    let { parentChannel: t, isSearchLoading: n, onChange: r, canCreatePost: s, inputRef: o } = e,
        {
            textAreaState: d,
            formOpen: u,
            previewing: m
        } = (0, X.xH)((e) => {
            let { textAreaState: t, formOpen: n, previewing: a } = e;
            return {
                textAreaState: t,
                formOpen: n,
                previewing: a
            };
        }, c.X),
        [x, f] = i.useState(null),
        p = i.useContext(O.oo),
        C = i.useCallback(() => {
            p.bumpDispatchPriority();
        }, [p]),
        v = (0, h.e7)([Z.Z], () => Z.Z.can($.Plq.ATTACH_FILES, t)),
        b = (0, h.Wu)([L.Z], () => L.Z.getUploads(t.id, k.d.FirstThreadMessage)),
        j = u && v && s,
        N = (null == t ? void 0 : t.isMediaChannel()) === !0,
        S = (function (e, t) {
            let n = (0, X.AF)(),
                a = (0, V.ql)(e);
            return i.useCallback(() => {
                let { formOpen: i, setFormOpenFromUserAction: r, name: l, textAreaState: s, hasClickedForm: o } = n.getState();
                !i &&
                    (setTimeout(() => {
                        if (t.current instanceof g.TextAreaAutosize) {
                            var e, n, a, i;
                            null === (n = t.current) || void 0 === n || null === (e = n._textArea) || void 0 === e || e.setSelectionRange(l.length, l.length), null === (i = t.current) || void 0 === i || null === (a = i._textArea) || void 0 === a || a.focus();
                        }
                    }, 0),
                    ((o && l.length > 0) || (s.textValue.trim().length > 0 && s.textValue.trim() !== a) || L.Z.getUploads(e.id, k.d.FirstThreadMessage).length > 0) && r());
            }, [n, e.id, a, t]);
        })(t, o),
        E = (function (e) {
            let { formOpen: t } = (0, X.xH)((e) => {
                    let { formOpen: t } = e;
                    return { formOpen: t };
                }, c.X),
                n = (0, X.AF)(),
                a = (0, P.r)({ parentChannel: e });
            i.useEffect(() => {
                let { setNameError: e, setMessageError: t } = n.getState();
                e(null), t(null);
            }, [t, n]);
            let r = i.useCallback(
                (t, a, i) => {
                    let { name: r, textAreaState: l } = n.getState();
                    null == t && (t = l.textValue), (t = t.trim());
                    let { content: s } = T.ZP.parse(e, t);
                    if (((t = s), null == a || 0 === a.length)) {
                        var o;
                        a = null === (o = w.Z.getStickerPreview(e.id, ea.drafts.type)) || void 0 === o ? void 0 : o.map((e) => e.id);
                    }
                    if (((null == i || 0 === i.length) && (i = L.Z.getUploads(e.id, k.d.FirstThreadMessage)), null != i && i.length > 0 && e.isMediaChannel())) {
                        let e = i.findIndex((e) => !0 === e.isThumbnail);
                        if (e > -1) {
                            let t = i[e];
                            i.splice(e, 1), i.unshift(t);
                        }
                    }
                    let c = 0 === r.length,
                        d = (null == t || 0 === t.length) && (null == a || 0 === a.length) && 0 === i.length;
                    return {
                        content: t,
                        stickers: a,
                        uploads: i,
                        hasNameError: c,
                        hasMessageError: d
                    };
                },
                [e, n]
            );
            return i.useCallback(
                async (t, i, l) => {
                    let { setNameError: s, setMessageError: o, setSubmitting: c, resetFormState: d, formOpen: u, setFormOpen: m, setPreviewing: h, setFormOpenFromUserAction: g, setGuidelinesOpen: x } = n.getState(),
                        f = U.Z.hasSeen(e.id);
                    if (!u)
                        return (
                            (0, G.P_)({
                                guildId: e.guild_id,
                                channelId: e.id
                            }),
                            !f && n.getState().setGuidelinesOpen(!0),
                            g(),
                            {
                                shouldClear: !1,
                                shouldRefocus: !1
                            }
                        );
                    let { content: p, stickers: C, uploads: v, hasNameError: b, hasMessageError: j } = r(t, i, l);
                    if ((s(b ? (0, H.V_)() : null), o(j ? (0, H.T4)() : null), b || j))
                        return {
                            shouldClear: !1,
                            shouldRefocus: !0
                        };
                    try {
                        c(!0);
                        let { valid: t } = await (0, B.v)({
                            content: p,
                            stickers: C,
                            uploads: v,
                            type: ea,
                            channel: e
                        });
                        if (!t)
                            return {
                                shouldClear: !1,
                                shouldRefocus: !0
                            };
                        let n = await a(p, C, v);
                        return (
                            (0, R.ok)(n),
                            D.Z.resort(e.id),
                            (0, y.qB)(e.id, ea.drafts.type),
                            d(),
                            m(!1),
                            h(!1),
                            U.Z.markAsSeen(e.id),
                            x(!1),
                            {
                                shouldClear: !0,
                                shouldRefocus: !1
                            }
                        );
                    } catch (t) {
                        var _, I;
                        return (
                            (null === (_ = t.body) || void 0 === _ ? void 0 : _.code) === $.evJ.AUTOMOD_TITLE_BLOCKED ? s((0, H.Gx)(t.body, e)) : (null === (I = t.body) || void 0 === I ? void 0 : I.code) === $.evJ.AUTOMOD_MESSAGE_BLOCKED && o((0, H.Gx)(t.body, e)),
                            {
                                shouldClear: !1,
                                shouldRefocus: !0
                            }
                        );
                    } finally {
                        c(!1);
                    }
                },
                [a, r, e, n]
            );
        })(t);
    return (
        i.useLayoutEffect(r, [u, d, b, r]),
        (0, a.jsx)(a.Fragment, {
            children: (0, a.jsx)('div', {
                'aria-label': s ? et.intl.string(et.t.dq7mAQ) : et.intl.string(et.t['5h0QOD']),
                className: l()(en.container, { [en.collapsed]: !u }),
                onClick: !u && s ? S : void 0,
                children: (0, a.jsxs)('form', {
                    onMouseDown: C,
                    onFocus: C,
                    onSubmit: (e) => {
                        if ((e.preventDefault(), !!s)) E();
                    },
                    children: [
                        (0, a.jsxs)('div', {
                            className: en.formContainer,
                            children: [
                                (0, a.jsx)(er, {
                                    parentChannel: t,
                                    isSearchLoading: n,
                                    inputRef: o
                                }),
                                (0, a.jsxs)('div', {
                                    className: m ? en.previewForm : en.form,
                                    children: [
                                        (0, a.jsx)(el, {
                                            editorRef: x,
                                            parentChannel: t,
                                            isSearchLoading: n,
                                            inputRef: o,
                                            canCreatePost: s
                                        }),
                                        u &&
                                            (0, a.jsx)(ec, {
                                                editorRef: x,
                                                setEditorRef: f,
                                                parentChannel: t,
                                                submit: E,
                                                disabled: !s
                                            }),
                                        m && (0, a.jsx)(ed, {})
                                    ]
                                }),
                                j && (N ? (0, a.jsx)(I._, { parentChannel: t }) : (0, a.jsx)(q.Z, { channelId: t.id }))
                            ]
                        }),
                        (0, a.jsxs)('div', {
                            className: en.form,
                            children: [
                                j && N && (0, a.jsx)(_.Z, { parentChannel: t }),
                                u &&
                                    (0, a.jsx)(em, {
                                        className: en.horizontalPadding,
                                        parentChannel: t,
                                        canCreatePost: s
                                    })
                            ]
                        })
                    ]
                })
            })
        })
    );
}
let er = i.memo(function (e) {
        let { parentChannel: t, isSearchLoading: n, inputRef: r } = e,
            {
                formOpen: l,
                name: s,
                textAreaState: o,
                hasClickedForm: d,
                submitting: u
            } = (0, X.xH)((e) => {
                let { formOpen: t, nameError: n, name: a, previewing: i, textAreaState: r, hasClickedForm: l, submitting: s } = e;
                return {
                    formOpen: t,
                    nameError: n,
                    name: a,
                    textAreaState: r,
                    previewing: i,
                    hasClickedForm: l,
                    submitting: s
                };
            }, c.X),
            m = (0, X.AF)(),
            h = (0, V.ql)(t),
            p = i.useCallback(() => {
                var e;
                m.getState().resetFormState(),
                    x.Z.clearDraft(t.id, k.d.ThreadSettings),
                    x.Z.clearDraft(t.id, k.d.FirstThreadMessage),
                    f.Z.clearAll(t.id, k.d.FirstThreadMessage),
                    m.getState().setFormOpen(!1),
                    m.getState().setBodyFocused(!1),
                    m.getState().setTitleFocused(!1),
                    m.getState().setHasClickedForm(!1),
                    m.getState().setPreviewing(!1),
                    null === (e = r.current) || void 0 === e || e.blur(),
                    (0, G.Oq)({
                        guildId: t.guild_id,
                        channelId: t.id
                    });
            }, [m, t.id, t.guild_id, r]),
            C = i.useMemo(() => {
                if (n && !l) return (0, a.jsx)(ef, {});
                if (!n && !l && (0 === o.textValue.trim().length || o.textValue.trim() === h))
                    return (0, a.jsx)(g.MagnifyingGlassIcon, {
                        size: 'md',
                        color: 'currentColor',
                        className: en.searchIcon
                    });
                if (!l && (s.trim().length > 0 || (o.textValue.trim().length > 0 && o.textValue.trim() !== h) || L.Z.getUploads(t.id, k.d.FirstThreadMessage).length > 0) && d)
                    return (0, a.jsx)(g.PencilIcon, {
                        size: 'md',
                        color: 'currentColor',
                        className: en.pencilIcon
                    });
                else
                    return u
                        ? (0, a.jsx)(g.CircleXIcon, {
                              size: 'md',
                              color: 'currentColor',
                              className: en.closeIconDisabled
                          })
                        : (0, a.jsx)(g.Tooltip, {
                              text: et.intl.string(et.t['98EPQE']),
                              children: (e) =>
                                  (0, a.jsx)(g.Clickable, {
                                      ...e,
                                      onClick: p,
                                      children: (0, a.jsx)(g.CircleXIcon, {
                                          size: 'md',
                                          color: 'currentColor',
                                          className: en.closeIcon
                                      })
                                  })
                          });
            }, [n, l, d, s, o.textValue, p, t.id, h, u]);
        return (0, a.jsx)('div', {
            className: en.prefixElement,
            children: C
        });
    }),
    el = i.memo(function (e) {
        let { parentChannel: t, inputRef: n, canCreatePost: r, editorRef: l } = e,
            {
                formOpen: s,
                nameError: d,
                name: u,
                textAreaState: m,
                previewing: x
            } = (0, X.xH)((e) => {
                let { formOpen: t, nameError: n, name: a, previewing: i, textAreaState: r, hasClickedForm: l, submitting: s } = e;
                return {
                    formOpen: t,
                    nameError: n,
                    name: a,
                    textAreaState: r,
                    previewing: i,
                    hasClickedForm: l,
                    submitting: s
                };
            }, c.X),
            f = (0, X.AF)(),
            p = null != t.topic && 0 !== t.topic.length,
            C = U.Z.hasSeen(t.id),
            v = (0, V.ql)(t),
            b = (0, h.e7)([F.default], () => F.default.getCurrentUser());
        o()(null != b, 'current user cannot be null');
        (0, O.yp)({
            event: $.CkL.FOCUS_COMPOSER_TITLE,
            handler: () => {
                var e;
                let t = n.current instanceof g.TextAreaAutosize ? (null === (e = n.current) || void 0 === e ? void 0 : e._textArea) : n.current;
                null == t || t.focus(), f.getState().setTitleFocused(!0), f.getState().setFormOpen(!0), f.getState().setHasClickedForm(!0);
            }
        });
        let j = i.useCallback(
                (e) => {
                    let n = e.clipboardData.files[0];
                    null != n && n.type.startsWith('image/') && (e.preventDefault(), (0, z.d)([n], t, k.d.FirstThreadMessage), f.getState().setFormOpenFromUserAction());
                },
                [t, f]
            ),
            _ = (0, H.Op)(d, { content: u });
        return (0, a.jsxs)('div', {
            className: en.titleContainer,
            onPaste: j,
            children: [
                s && x
                    ? (0, a.jsx)(g.Heading, {
                          variant: 'heading-md/semibold',
                          className: en.title,
                          children: u
                      })
                    : (0, a.jsx)(g.TextArea, {
                          value: u,
                          placeholder: r ? (s || (m.textValue.length > 0 && m.textValue.trim() !== v) ? et.intl.string(et.t.lU4dDQ) : et.intl.string(et.t.CjmivL)) : et.intl.string(et.t['5h0QOD']),
                          flex: !0,
                          autosize: s,
                          rows: 1,
                          showCharacterCount: !1,
                          showRemainingCharacterCount: !1,
                          maxLength: $.HN8,
                          onChange: (e) => {
                              let n = (0, E.Z)(e, !1);
                              f.getState().setName(n);
                              let a = 0 === n.trim().length,
                                  i = 0 === m.textValue.trim().length,
                                  r = m.textValue.trim() === v;
                              a && (i || r) && f.getState().setHasClickedForm(!1), !s && D.Z.updateForumSearchQuery(t.id, n);
                          },
                          onFocus: () => {
                              f.getState().setTitleFocused(!0), f.getState().setBodyFocused(!1);
                          },
                          onBlur: () => {
                              f.getState().setTitleFocused(!1);
                              let e = (0, E.Z)(u, !0);
                              e !== u && (f.getState().setName(e), !s && D.Z.updateForumSearchQuery(t.id, e));
                          },
                          onKeyDown: (e) => {
                              var a, i;
                              'Enter' === e.key &&
                                  (e.preventDefault(),
                                  e.stopPropagation(),
                                  s && u.length > 0
                                      ? null == l || l.focus()
                                      : r &&
                                        e.shiftKey &&
                                        ((0, G.nH)({
                                            guildId: t.guild_id,
                                            channelId: t.id
                                        }),
                                        p && !C && f.getState().setGuidelinesOpen(!0),
                                        f.getState().setFormOpenFromUserAction(),
                                        u.trim().length > 0 && (f.getState().setBodyFocused(!0), null == l || l.focus())));
                              let o = n.current instanceof g.TextAreaAutosize ? (null === (a = n.current) || void 0 === a ? void 0 : a._textArea) : n.current;
                              if ('Home' === e.key || 'End' === e.key) {
                                  if (null == o) return;
                                  if ((e.preventDefault(), e.stopPropagation(), 'Home' === e.key)) o.setSelectionRange(0, 0);
                                  else {
                                      let e = u.length;
                                      o.setSelectionRange(e, e);
                                  }
                              }
                              'Escape' === e.key && !f.getState().submitting && (null === (i = n.current) || void 0 === i || i.blur(), f.getState().setFormOpen(!1), f.getState().setTitleFocused(!1), f.getState().setBodyFocused(!1), f.getState().setPreviewing(!1));
                          },
                          error: _,
                          className: en.title,
                          inputRef: n
                      }),
                s
                    ? null
                    : (0, a.jsxs)(a.Fragment, {
                          children: [
                              (0, a.jsx)(es, { parentChannel: t }),
                              (0, a.jsx)(eh, {
                                  parentChannel: t,
                                  canCreatePost: r
                              })
                          ]
                      })
            ]
        });
    });
function es(e) {
    let { parentChannel: t } = e,
        { guidelinesOpen: n } = (0, X.xH)((e) => {
            let { guidelinesOpen: t } = e;
            return { guidelinesOpen: t };
        }, c.X),
        i = (0, X.AF)(),
        r = null != t.topic && 0 !== t.topic.length,
        s = () => {
            i.getState().setGuidelinesOpen(!n);
        };
    return r
        ? (0, a.jsx)(g.Tooltip, {
              text: et.intl.string(et.t['4d4T4u']),
              children: (e) =>
                  (0, a.jsx)(g.Clickable, {
                      ...e,
                      onClick: s,
                      className: l()(en.forumPostFormButton, { [en.forumPostFormButtonActive]: n }),
                      children: (0, a.jsx)(g.BookCheckIcon, {
                          size: 'md',
                          color: 'currentColor',
                          ...e
                      })
                  })
          })
        : null;
}
let eo = i.memo(function (e) {
        let { parentChannel: t, textValue: n } = e,
            i = new M.ZP({
                channelId: t.id,
                content: n
            }),
            { content: r } = (0, N.Z)(i, {
                hideSimpleEmbedContent: !0,
                isInteracting: !1,
                formatInline: !1,
                allowList: !0,
                allowHeading: !0,
                previewLinkTarget: !0,
                allowLinks: !0
            }),
            s = (0, S.Z)(
                {
                    message: i,
                    channel: t
                },
                r,
                !1
            );
        return (0, a.jsx)('div', {
            className: l()(en.channelTextAreaInner, en.previewTextArea),
            children: s
        });
    }),
    ec = i.memo(function (e) {
        let { parentChannel: t, submit: n, disabled: r = !1, editorRef: s, setEditorRef: d } = e,
            u = (0, h.e7)([F.default], () => F.default.getCurrentUser());
        o()(null != u, 'current user cannot be null');
        let {
                messageError: m,
                previewing: x,
                textAreaState: f,
                bodyFocused: p,
                formOpen: C
            } = (0, X.xH)((e) => {
                let { messageError: t, textAreaState: n, previewing: a, bodyFocused: i, formOpen: r } = e;
                return {
                    messageError: t,
                    textAreaState: n,
                    previewing: a,
                    bodyFocused: i,
                    formOpen: r
                };
            }, c.X),
            b = (0, X.AF)();
        i.useEffect(
            () => () =>
                (0, G.Vn)({
                    guildId: t.guild_id,
                    channelId: t.id
                }),
            [t.guild_id, t.id]
        );
        let _ = i.useCallback(() => {
                b.getState().setBodyFocused(!0);
            }, [b]),
            I = i.useCallback(() => {
                b.getState().setBodyFocused(!1);
            }, [b]),
            T = i.useCallback(
                (e, t, n) => {
                    let { setTextAreaState: a } = b.getState();
                    a({
                        textValue: t,
                        richValue: n
                    });
                },
                [b]
            ),
            N = i.useCallback(
                (e) => {
                    let { value: t, uploads: a, stickers: i } = e;
                    return n(t, i, a);
                },
                [n]
            );
        (0, O.yp)({
            event: $.CkL.TEXTAREA_FOCUS,
            handler: _
        }),
            (0, O.yp)({
                event: $.CkL.TEXTAREA_BLUR,
                handler: I
            });
        let S = (0, H.Op)(m, { content: f.textValue });
        return (0, a.jsx)('div', {
            className: en.bodyContainer,
            children: (0, a.jsxs)('div', {
                className: en.contentContainer,
                children: [
                    x
                        ? (0, a.jsx)(eo, {
                              parentChannel: t,
                              textValue: f.textValue
                          })
                        : (0, a.jsx)('div', {
                              onClick: _,
                              children: (0, a.jsx)(v.Z, {
                                  type: ea,
                                  setEditorRef: d,
                                  channel: t,
                                  placeholder: et.intl.string(et.t['8IPnv7']),
                                  textValue: f.textValue,
                                  richValue: f.richValue,
                                  focused: p,
                                  className: en.channelTextArea,
                                  innerClassName: l()(en.channelTextAreaInner, { [en.channelTextAreaInnerError]: null != S }),
                                  onChange: T,
                                  onSubmit: N,
                                  promptToUpload: z.d,
                                  disabled: r,
                                  onKeyDown: (e) => {
                                      if ((('ArrowUp' === e.key || 'ArrowDown' === e.key) && e.stopPropagation(), 'Home' === e.key || 'End' === e.key)) {
                                          if (null == s) return;
                                          e.preventDefault(), e.stopPropagation();
                                          let t = s.getSlateEditor();
                                          if (null == t) return;
                                          'Home' === e.key ? j.Q.resetSelectionToStart(t) : j.Q.resetSelectionToEnd(t);
                                      }
                                      C && 'Escape' === e.key && !b.getState().submitting && (null == s || s.blur(), b.getState().setFormOpen(!1), b.getState().setTitleFocused(!1), b.getState().setBodyFocused(!1), b.getState().setPreviewing(!1));
                                  },
                                  autoCompletePosition: 'bottom'
                              })
                          }),
                    (0, a.jsx)(g.InputError, { error: S })
                ]
            })
        });
    });
function ed() {
    return (0, a.jsx)('div', {
        className: en.previewModeIndicator,
        children: (0, a.jsx)(g.Text, {
            variant: 'text-sm/normal',
            color: 'interactive-normal',
            children: et.intl.string(et.t['WE/cYm'])
        })
    });
}
function eu() {
    let { previewing: e } = (0, X.xH)((e) => {
            let { previewing: t } = e;
            return { previewing: t };
        }, c.X),
        t = (0, X.AF)(),
        n = i.useCallback(() => {
            t.getState().setPreviewing(!e), (0, G.nE)();
        }, [e, t]);
    return (0, a.jsx)(g.Tooltip, {
        text: e ? et.intl.string(et.t.ojM1xM) : et.intl.string(et.t.SKNnqq),
        children: (t) =>
            (0, a.jsx)(g.Clickable, {
                ...t,
                onClick: n,
                className: l()(en.forumPostFormButton, { [en.forumPostFormButtonActive]: e }),
                children: e
                    ? (0, a.jsx)(g.EyeSlashIcon, {
                          size: 'md',
                          color: 'currentColor',
                          ...t
                      })
                    : (0, a.jsx)(g.EyeIcon, {
                          size: 'md',
                          color: 'currentColor',
                          ...t
                      })
            })
    });
}
let em = i.memo(function (e) {
    let { parentChannel: t, canCreatePost: n, className: r } = e,
        {
            textAreaState: l,
            appliedTags: s,
            name: o
        } = (0, X.xH)((e) => {
            let { textAreaState: t, appliedTags: n, name: a } = e;
            return {
                textAreaState: t,
                appliedTags: n,
                name: a
            };
        }, c.X),
        { rateLimitPerUser: d } = t,
        u = d > 0,
        m = (0, h.e7)([A.Z], () => A.Z.getSlowmodeCooldownGuess(t.id, A.S.CreateThread)),
        x = (0, h.e7)([Z.Z], () => Z.Z.can($.Plq.MANAGE_THREADS, t) || Z.Z.can($.Plq.MANAGE_CHANNELS, t)),
        f = t.hasFlag(ee.zZ.REQUIRE_TAG) && 0 === s.size && o.length > 0 && l.textValue.length > 0,
        p = (0, X.AF)(),
        v = i.useCallback(() => {
            p.getState().setBodyFocused(!1);
        }, [p]),
        j = i.useMemo(() => '' !== o.trim() && '' !== l.textValue.trim(), [o, l.textValue]);
    return (
        i.useEffect(() => {
            !j && p.getState().setPreviewing(!1);
        }, [j, p]),
        (0, a.jsxs)('div', {
            className: r,
            children: [
                (0, a.jsx)(ex, { parentChannel: t }),
                (0, a.jsx)('div', { className: en.tagsDivider }),
                (0, a.jsxs)('div', {
                    className: en.controlsContainer,
                    children: [
                        (0, a.jsxs)('div', {
                            className: en.controls,
                            children: [
                                (0, a.jsxs)('div', {
                                    className: en.wrappedControls,
                                    children: [
                                        f &&
                                            (0, a.jsx)(g.Text, {
                                                variant: 'text-sm/normal',
                                                color: 'text-danger',
                                                children: et.intl.string(et.t.xPfNQk)
                                            }),
                                        (0, a.jsx)(b.Z, {
                                            type: ea,
                                            textValue: l.textValue,
                                            className: en.characterCount
                                        }),
                                        u &&
                                            (0, a.jsx)(J.Z, {
                                                rateLimitPerUser: d,
                                                slowmodeCooldownGuess: m,
                                                isBypassSlowmode: x,
                                                leadingIcon: !0
                                            })
                                    ]
                                }),
                                (0, a.jsx)(es, { parentChannel: t }),
                                j && (0, a.jsx)(eu, {}),
                                (0, a.jsx)(eh, {
                                    parentChannel: t,
                                    disableIfInvalid: !0,
                                    canCreatePost: n,
                                    disabled: u && !x && m > 0
                                })
                            ]
                        }),
                        (0, a.jsx)(
                            C.Z,
                            {
                                type: ea,
                                className: en.expressionPicker,
                                onClick: v
                            },
                            'expression'
                        )
                    ]
                })
            ]
        })
    );
});
function eh(e) {
    let { parentChannel: t, canCreatePost: n, disabled: i, disableIfInvalid: r = !1 } = e,
        {
            submitting: l,
            textAreaState: s,
            name: o,
            appliedTags: d,
            formOpen: u
        } = (0, X.xH)((e) => {
            let { submitting: t, textAreaState: n, name: a, appliedTags: i, formOpen: r } = e;
            return {
                submitting: t,
                textAreaState: n,
                name: a,
                appliedTags: i,
                formOpen: r
            };
        }, c.X),
        m = t.hasFlag(ee.zZ.REQUIRE_TAG) && 0 === d.size && o.length > 0 && s.textValue.length > 0,
        x = (0, h.Wu)([L.Z], () => L.Z.getUploads(t.id, k.d.FirstThreadMessage)),
        f = s.textValue.trim().length > 0 || x.length > 0,
        p = !m && f && o.trim().length > 0;
    if (__OVERLAY__) return null;
    let C = function () {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return (0, a.jsxs)(g.Button, {
            ...e,
            size: g.Button.Sizes.SMALL,
            className: en.submitButton,
            innerClassName: en.submitButtonInner,
            type: 'submit',
            submitting: l,
            disabled: (r && !p) || i || !n,
            children: [
                (0, a.jsx)(g.ChatIcon, {
                    size: 'xs',
                    color: 'currentColor',
                    className: en.submitIcon
                }),
                (0, a.jsx)(g.Text, {
                    variant: 'text-md/semibold',
                    color: 'none',
                    children: u ? et.intl.string(et.t.pIuQIy) : et.intl.string(et.t.TyAuoa)
                })
            ]
        });
    };
    return n
        ? C()
        : (0, a.jsx)(g.Tooltip, {
              text: et.intl.string(et.t.iyzwnJ),
              children: (e) => C(e)
          });
}
function eg() {
    return Promise.resolve();
}
function ex(e) {
    let { parentChannel: t } = e,
        {
            appliedTags: n,
            toggleAppliedTag: r,
            setPopoutOpen: s
        } = (0, X.xH)((e) => {
            let { appliedTags: t, toggleAppliedTag: n, setPopoutOpen: a } = e;
            return {
                appliedTags: t,
                toggleAppliedTag: n,
                setPopoutOpen: a
            };
        }, c.X),
        o = n.size >= Q.Cn,
        h = (0, d.ZP)({
            id: ''.concat(t.id, '-post-form-tags-navigator'),
            isEnabled: !0,
            wrap: !0,
            scrollToStart: eg,
            scrollToEnd: eg,
            orientation: m.hy.HORIZONTAL
        }),
        { containerRef: x, containerWidth: f } = (0, Y.Z)(),
        p = i.useRef(null),
        [C, v] = i.useState(!0),
        b = (0, V.Vm)(t),
        [j, _] = i.useState(0);
    return (i.useLayoutEffect(() => {
        var e;
        let t = p.current,
            n = null == t ? void 0 : null === (e = t.children) || void 0 === e ? void 0 : e[0],
            a = null == t || null == n || n.clientHeight > t.clientHeight;
        if ((a !== C && v(a), a && null != x.current && null != n && null != n.children)) {
            let { left: e, top: t } = x.current.getBoundingClientRect(),
                a = 0;
            for (let i of n.children) {
                let { right: n, top: r, height: l } = i.getBoundingClientRect();
                if (r - t > l) break;
                n - e > a && (a = n - e);
            }
            _(a);
        }
    }, [b, C, x, f]),
    0 === b.length)
        ? null
        : (0, a.jsx)(a.Fragment, {
              children: (0, a.jsxs)('div', {
                  className: en.tagsContainer,
                  ref: x,
                  children: [
                      (0, a.jsx)(g.TagIcon, {
                          size: 'xs',
                          color: 'currentColor',
                          className: en.tagsIcon
                      }),
                      (0, a.jsx)('div', {
                          className: en.tagList,
                          ref: p,
                          children: (0, a.jsx)(u.bG, {
                              navigator: h,
                              children: (0, a.jsx)(u.SJ, {
                                  children: (e) => {
                                      let { ref: t, ...i } = e;
                                      return (0, a.jsx)('div', {
                                          className: en.tagListInner,
                                          ref: t,
                                          ...i,
                                          children: b.map((e) =>
                                              (0, a.jsx)(
                                                  K.Z,
                                                  {
                                                      ariaLabel: et.intl.formatToPlainString(et.t.FSZVIS, { tagName: e.name }),
                                                      tag: e,
                                                      onClick: o && !n.has(e.id) ? void 0 : () => r(e.id),
                                                      disabled: !n.has(e.id) && n.size >= Q.Cn,
                                                      selected: n.has(e.id),
                                                      size: K.Z.Sizes.SMALL
                                                  },
                                                  e.id
                                              )
                                          )
                                      });
                                  }
                              })
                          })
                      }),
                      C &&
                          (0, a.jsx)(g.Popout, {
                              onRequestOpen: () => s(!0),
                              onRequestClose: () => s(!1),
                              renderPopout: (e) => {
                                  let { closePopout: i } = e;
                                  return (0, a.jsx)(W.Z, {
                                      parentChannel: t,
                                      appliedTags: n,
                                      maxTagsApplied: o,
                                      onSelectTag: r,
                                      onClose: i
                                  });
                              },
                              position: 'bottom',
                              align: 'center',
                              children: (e) =>
                                  (0, a.jsxs)(g.Button, {
                                      ...e,
                                      size: g.Button.Sizes.TINY,
                                      className: en.tagsButton,
                                      innerClassName: en.tagsButtonInner,
                                      style: { left: j },
                                      look: g.Button.Looks.LINK,
                                      'aria-label': et.intl.string(et.t.N5vP9P),
                                      children: [
                                          et.intl.string(et.t.IkpM1d),
                                          (0, a.jsx)(g.ChevronSmallDownIcon, {
                                              size: 'custom',
                                              color: 'currentColor',
                                              width: 16
                                          })
                                      ]
                                  })
                          }),
                      (0, a.jsxs)(g.Button, {
                          size: g.Button.Sizes.TINY,
                          className: l()(en.tagsButton, en.tagsButtonPlaceholder),
                          innerClassName: en.tagsButtonInner,
                          look: g.Button.Looks.LINK,
                          'aria-label': et.intl.string(et.t.N5vP9P),
                          children: [
                              et.intl.string(et.t.IkpM1d),
                              (0, a.jsx)(g.ChevronSmallDownIcon, {
                                  size: 'custom',
                                  color: 'currentColor',
                                  width: 16
                              })
                          ]
                      })
                  ]
              })
          });
}
function ef(e) {
    let { style: t, className: n } = e;
    return (0, a.jsx)('div', {
        className: n,
        style: t,
        children: (0, a.jsx)('div', { className: en.loader })
    });
}
