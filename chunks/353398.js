n.d(t, {
    Q5: function () {
        return R;
    },
    Sf: function () {
        return E;
    },
    ZP: function () {
        return y;
    }
}),
    n(47120);
var i,
    r = n(200651),
    l = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(512722),
    c = n.n(o),
    d = n(442837),
    u = n(692547),
    m = n(481060),
    h = n(570140),
    g = n(484614),
    x = n(852860),
    p = n(881052),
    f = n(751189),
    C = n(409059),
    v = n(518936),
    _ = n(999382),
    I = n(58346),
    N = n(388032),
    T = n(434881),
    j = n(232186);
function b(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
class S extends (i = d.ZP.Store) {
    getTemplate() {
        let e = _.Z.getProps().guild;
        if (null == e) return null;
        let t = C.Z.getForGuild(e.id);
        return null != t && t.state !== I.Rj.RESOLVING ? t : null;
    }
    showNotice() {
        let e = this.getTemplate();
        return null != e && null != this.name && '' !== this.name && (this.name.trim() !== e.name || this.description.trim() !== e.description);
    }
    constructor(...e) {
        super(...e),
            b(this, 'name', ''),
            b(this, 'description', ''),
            b(this, 'error', null),
            b(this, 'reset', () => {
                let e = this.getTemplate();
                if (null != e) {
                    var t, n;
                    (this.name = null !== (t = e.name) && void 0 !== t ? t : this.name), (this.description = null !== (n = e.description) && void 0 !== n ? n : this.description);
                } else (this.name = ''), (this.description = '');
                this.emitChange();
            }),
            b(this, 'setName', (e) => {
                (this.name = e), this.emitChange();
            }),
            b(this, 'setDescription', (e) => {
                (this.description = e), this.emitChange();
            }),
            b(this, 'setError', (e) => {
                (this.error = e), this.emitChange();
            }),
            b(this, 'save', async () => {
                await f.Z.updateGuildTemplate(_.Z.getProps().guild.id, this.getTemplate().code, this.name, this.description), this.emitChange();
            });
    }
}
b(S, 'displayName', 'GuildSettingsTemplateMetadataStore_');
let E = new S(h.Z);
function R() {
    let [e, t] = l.useState(!1),
        n = async () => {
            t(!0), await E.save(), t(!1);
        };
    return (0, r.jsx)(x.Z, {
        submitting: e,
        onReset: E.reset,
        onSave: n
    });
}
function y() {
    return (0, r.jsx)(m.FormSection, {
        className: j.marginBottom4,
        children: (0, r.jsxs)(m.HeadingLevel, {
            component: (0, r.jsx)(m.FormTitle, {
                tag: m.FormTitleTags.H1,
                children: N.intl.string(N.t.KUw7Sk)
            }),
            children: [
                (0, r.jsx)(m.FormText, {
                    className: j.marginBottom20,
                    type: m.FormTextTypes.DESCRIPTION,
                    children: N.intl.format(N.t.c0m8bG, {})
                }),
                (0, r.jsx)(Z, {}),
                (0, r.jsx)(m.FormDivider, { className: T.divider }),
                (0, r.jsx)(A, {})
            ]
        })
    });
}
function A() {
    let { guild: e } = _.Z.getProps();
    c()(null != e, 'guild cannot be null');
    let t = (0, d.e7)([E], () => E.error),
        [n, i] = l.useState(!0),
        { loading: a, guildTemplate: s } = (function (e) {
            let [t, n] = l.useState(!0);
            return (
                l.useEffect(() => {
                    (async function t() {
                        n(!0);
                        try {
                            await f.Z.loadTemplatesForGuild(e), n(!1);
                        } catch (e) {
                            E.setError(new p.Hx(e));
                        }
                    })();
                }, [e]),
                {
                    loading: t,
                    guildTemplate: (0, d.e7)([C.Z], () => C.Z.getForGuild(e), [e])
                }
            );
        })(e.id);
    if (
        (l.useEffect(() => {
            if (!!n && !a) {
                if (null != s) {
                    var e, t;
                    E.setName(null !== (e = s.name) && void 0 !== e ? e : ''), E.setDescription(null !== (t = s.description) && void 0 !== t ? t : '');
                }
                i(!1);
            }
        }, [n, s, a]),
        l.useEffect(
            () => () => {
                E.reset(), E.setError(null);
            },
            []
        ),
        n)
    )
        return null != t
            ? (0, r.jsx)(m.Text, {
                  color: 'text-danger',
                  variant: 'text-sm/normal',
                  children: t.message
              })
            : (0, r.jsx)(m.Spinner, { className: j.marginTop40 });
    let o = null != t && null == t.getFirstFieldErrorMessage('name') && null == t.getFirstFieldErrorMessage('description');
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(D, {}),
            (0, r.jsx)(O, {
                guild: e,
                guildTemplate: s
            }),
            o
                ? (0, r.jsx)(m.Text, {
                      className: j.marginTop8,
                      color: 'text-danger',
                      variant: 'text-sm/normal',
                      children: t.getAnyErrorMessage()
                  })
                : null
        ]
    });
}
function Z() {
    return (0, r.jsxs)('div', {
        className: T.descriptionBox,
        children: [
            (0, r.jsxs)('div', {
                className: T.descriptionSection,
                children: [
                    (0, r.jsx)(m.Heading, {
                        variant: 'eyebrow',
                        children: N.intl.string(N.t['f8u+VF'])
                    }),
                    (0, r.jsxs)('div', {
                        className: T.descriptionRow,
                        children: [
                            (0, r.jsx)(m.CircleCheckIcon, {
                                size: 'md',
                                className: T.descriptionIcon,
                                color: u.Z.unsafe_rawColors.GREEN_360.css,
                                secondaryColor: u.Z.unsafe_rawColors.WHITE_500.css
                            }),
                            N.intl.string(N.t.K2tn19)
                        ]
                    }),
                    (0, r.jsxs)('div', {
                        className: T.descriptionRow,
                        children: [
                            (0, r.jsx)(m.CircleCheckIcon, {
                                size: 'md',
                                className: T.descriptionIcon,
                                color: u.Z.unsafe_rawColors.GREEN_360.css,
                                secondaryColor: u.Z.unsafe_rawColors.WHITE_500.css
                            }),
                            N.intl.string(N.t.om5gNj)
                        ]
                    }),
                    (0, r.jsxs)('div', {
                        className: T.descriptionRow,
                        children: [
                            (0, r.jsx)(m.CircleCheckIcon, {
                                size: 'md',
                                className: T.descriptionIcon,
                                color: u.Z.unsafe_rawColors.GREEN_360.css,
                                secondaryColor: u.Z.unsafe_rawColors.WHITE_500.css
                            }),
                            N.intl.string(N.t['/VNqdH'])
                        ]
                    })
                ]
            }),
            (0, r.jsxs)('div', {
                className: T.descriptionSection,
                children: [
                    (0, r.jsx)(m.Heading, {
                        variant: 'eyebrow',
                        children: N.intl.string(N.t['8zhJEh'])
                    }),
                    (0, r.jsxs)('div', {
                        className: T.descriptionRow,
                        children: [
                            (0, r.jsx)(m.CircleXIcon, {
                                size: 'md',
                                className: T.descriptionIcon,
                                color: u.Z.unsafe_rawColors.RED_400.css,
                                secondaryColor: u.Z.unsafe_rawColors.WHITE_500.css
                            }),
                            N.intl.string(N.t.WOKI6u)
                        ]
                    }),
                    (0, r.jsxs)('div', {
                        className: T.descriptionRow,
                        children: [
                            (0, r.jsx)(m.CircleXIcon, {
                                size: 'md',
                                className: T.descriptionIcon,
                                color: u.Z.unsafe_rawColors.RED_400.css,
                                secondaryColor: u.Z.unsafe_rawColors.WHITE_500.css
                            }),
                            N.intl.string(N.t.ddhDJC)
                        ]
                    }),
                    (0, r.jsxs)('div', {
                        className: T.descriptionRow,
                        children: [
                            (0, r.jsx)(m.CircleXIcon, {
                                size: 'md',
                                className: T.descriptionIcon,
                                color: u.Z.unsafe_rawColors.RED_400.css,
                                secondaryColor: u.Z.unsafe_rawColors.WHITE_500.css
                            }),
                            N.intl.string(N.t['6Q/DHh'])
                        ]
                    })
                ]
            })
        ]
    });
}
function L(e) {
    let { cancel: t, confirm: n } = e;
    return (0, r.jsx)(m.DeclarativeConfirmModal, {
        dismissable: !0,
        header: N.intl.string(N.t['cN/RFB']),
        confirmText: N.intl.string(N.t['cN/RFB']),
        cancelText: N.intl.string(N.t['ETE/oK']),
        onCancel: t,
        onConfirm: n,
        children: (0, r.jsx)(m.Text, {
            variant: 'text-md/normal',
            color: 'text-normal',
            children: N.intl.string(N.t.apCQv7)
        })
    });
}
function D() {
    let e = (0, d.e7)([E], () => E.name),
        t = (0, d.e7)([E], () => E.description),
        n = (0, d.e7)([E], () => E.error);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(m.FormItem, {
                className: j.marginBottom20,
                title: N.intl.string(N.t.z1a9R0),
                error: null == n ? void 0 : n.getFirstFieldErrorMessage('name'),
                children: (0, r.jsx)(m.TextInput, {
                    value: e,
                    onChange: (e) => E.setName(e),
                    placeholder: N.intl.string(N.t.bMlpvr),
                    maxLength: 100
                })
            }),
            (0, r.jsx)(m.FormItem, {
                className: j.marginBottom20,
                title: N.intl.string(N.t.GxirWV),
                error: null == n ? void 0 : n.getFirstFieldErrorMessage('description'),
                children: (0, r.jsx)(m.TextArea, {
                    value: t,
                    onChange: (e) => E.setDescription(e),
                    placeholder: N.intl.string(N.t.n1FBXl),
                    maxLength: 120
                })
            })
        ]
    });
}
function O(e) {
    let { guild: t, guildTemplate: n } = e;
    return null == n
        ? (0, r.jsx)(k, { guild: t })
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(m.FormItem, {
                      title: N.intl.string(N.t.zGGcLy),
                      children: (0, r.jsx)(g.Z, {
                          buttonLook: m.Button.Looks.FILLED,
                          buttonColor: m.Button.Colors.BRAND,
                          value: (0, v.Z)(n.code)
                      })
                  }),
                  n.isDirty &&
                      (0, r.jsx)(m.Text, {
                          color: 'text-warning',
                          className: j.marginTop8,
                          variant: 'text-sm/normal',
                          children: N.intl.string(N.t.aWsjtL)
                      }),
                  (0, r.jsxs)('div', {
                      className: s()(j.marginTop20, T.buttonContainer),
                      children: [
                          n.isDirty &&
                              (0, r.jsx)(P, {
                                  guild: t,
                                  guildTemplate: n
                              }),
                          (0, r.jsxs)('div', {
                              className: T.rightButtonContainer,
                              children: [
                                  (0, r.jsx)(M, {
                                      guild: t,
                                      guildTemplate: n
                                  }),
                                  (0, r.jsx)(w, { guildTemplate: n })
                              ]
                          })
                      ]
                  }),
                  n.isDirty &&
                      (0, r.jsx)('div', {
                          className: T.lastSync,
                          children: N.intl.format(N.t.v0AVur, { timestamp: new Date(n.updatedAt) })
                      })
              ]
          });
}
function k(e) {
    var t;
    let { guild: n } = e,
        i = (0, d.e7)([E], () => E.name),
        [a, s] = l.useState(!1),
        o = async () => {
            E.setError(null), s(!0);
            try {
                await f.Z.createGuildTemplate(n.id, E.name, E.description);
            } catch (e) {
                E.setError(new p.Hx(e));
            }
            s(!1);
        };
    return (0, r.jsx)(m.Button, {
        submitting: a,
        disabled: !(null != (t = i) && t.trim().length >= 2),
        color: m.Button.Colors.BRAND,
        onClick: o,
        children: N.intl.string(N.t.Wxdi8P)
    });
}
function P(e) {
    let { guild: t, guildTemplate: n } = e,
        [i, a] = l.useState(!1),
        s = async () => {
            E.setError(null), a(!0);
            try {
                await f.Z.syncGuildTemplate(t.id, n.code);
            } catch (e) {
                E.setError(new p.Hx(e));
            }
            a(!1);
        };
    return (0, r.jsx)(m.Button, {
        submitting: i,
        className: T.button,
        onClick: s,
        children: N.intl.string(N.t['Nw+0Y2'])
    });
}
function M(e) {
    let { guild: t, guildTemplate: n } = e,
        [i, a] = l.useState(!1),
        s = async () => {
            E.setError(null);
            try {
                await f.Z.deleteGuildTemplate(t.id, n.code), E.setName(''), E.setDescription('');
            } catch (e) {
                E.setError(new p.Hx(e));
            }
            a(!1);
        };
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(m.Button, {
                look: m.Button.Looks.OUTLINED,
                className: T.button,
                color: m.Button.Colors.RED,
                onClick: () => a(!0),
                children: N.intl.string(N.t['cN/RFB'])
            }),
            i
                ? (0, r.jsx)(L, {
                      confirm: s,
                      cancel: () => a(!1)
                  })
                : null
        ]
    });
}
function w(e) {
    let { guildTemplate: t } = e;
    return (0, r.jsx)(m.Button, {
        color: m.Button.Colors.PRIMARY,
        className: T.button,
        onClick: () =>
            (0, m.openModalLazy)(async () => {
                let { default: e } = await Promise.all([n.e('10778'), n.e('22769')]).then(n.bind(n, 766775));
                return (n) =>
                    (0, r.jsx)(e, {
                        ...n,
                        guildTemplate: t
                    });
            }),
        children: N.intl.string(N.t.YI3iV1)
    });
}
