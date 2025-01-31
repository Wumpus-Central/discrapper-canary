n.d(t, {
    Q5: () => R,
    Sf: () => S,
    ZP: () => Z
}),
    n(47120);
var i,
    r = n(200651),
    l = n(192379),
    s = n(120356),
    a = n.n(s),
    o = n(512722),
    c = n.n(o),
    d = n(442837),
    u = n(692547),
    m = n(481060),
    h = n(570140),
    g = n(484614),
    x = n(852860),
    p = n(881052),
    _ = n(751189),
    C = n(409059),
    f = n(518936),
    v = n(999382),
    N = n(58346),
    j = n(388032),
    I = n(434881),
    E = n(232186);
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
class T extends (i = d.ZP.Store) {
    getTemplate() {
        let e = v.Z.getProps().guild;
        if (null == e) return null;
        let t = C.Z.getForGuild(e.id);
        return null != t && t.state !== N.Rj.RESOLVING ? t : null;
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
                await _.Z.updateGuildTemplate(v.Z.getProps().guild.id, this.getTemplate().code, this.name, this.description), this.emitChange();
            });
    }
}
b(T, 'displayName', 'GuildSettingsTemplateMetadataStore_');
let S = new T(h.Z);
function R() {
    let [e, t] = l.useState(!1),
        n = async () => {
            t(!0), await S.save(), t(!1);
        };
    return (0, r.jsx)(x.Z, {
        submitting: e,
        onReset: S.reset,
        onSave: n
    });
}
function Z() {
    return (0, r.jsx)(m.hjN, {
        className: E.marginBottom4,
        children: (0, r.jsxs)(m.y5t, {
            component: (0, r.jsx)(m.vwX, {
                tag: m.RB0.H1,
                children: j.intl.string(j.t.KUw7Sk)
            }),
            children: [
                (0, r.jsx)(m.R94, {
                    className: E.marginBottom20,
                    type: m.geA.DESCRIPTION,
                    children: j.intl.format(j.t.c0m8bG, {})
                }),
                (0, r.jsx)(A, {}),
                (0, r.jsx)(m.$i$, { className: I.divider }),
                (0, r.jsx)(y, {})
            ]
        })
    });
}
function y() {
    let { guild: e } = v.Z.getProps();
    c()(null != e, 'guild cannot be null');
    let t = (0, d.e7)([S], () => S.error),
        [n, i] = l.useState(!0),
        { loading: s, guildTemplate: a } = (function (e) {
            let [t, n] = l.useState(!0);
            return (
                l.useEffect(() => {
                    (async function () {
                        n(!0);
                        try {
                            await _.Z.loadTemplatesForGuild(e), n(!1);
                        } catch (e) {
                            S.setError(new p.Hx(e));
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
            if (n && !s) {
                if (null != a) {
                    var e, t;
                    S.setName(null !== (e = a.name) && void 0 !== e ? e : ''), S.setDescription(null !== (t = a.description) && void 0 !== t ? t : '');
                }
                i(!1);
            }
        }, [n, a, s]),
        l.useEffect(
            () => () => {
                S.reset(), S.setError(null);
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
            : (0, r.jsx)(m.$jN, { className: E.marginTop40 });
    let o = null != t && null == t.getFirstFieldErrorMessage('name') && null == t.getFirstFieldErrorMessage('description');
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(D, {}),
            (0, r.jsx)(O, {
                guild: e,
                guildTemplate: a
            }),
            o
                ? (0, r.jsx)(m.Text, {
                      className: E.marginTop8,
                      color: 'text-danger',
                      variant: 'text-sm/normal',
                      children: t.getAnyErrorMessage()
                  })
                : null
        ]
    });
}
function A() {
    return (0, r.jsxs)('div', {
        className: I.descriptionBox,
        children: [
            (0, r.jsxs)('div', {
                className: I.descriptionSection,
                children: [
                    (0, r.jsx)(m.X6q, {
                        variant: 'eyebrow',
                        children: j.intl.string(j.t['f8u+VF'])
                    }),
                    (0, r.jsxs)('div', {
                        className: I.descriptionRow,
                        children: [
                            (0, r.jsx)(m.owK, {
                                size: 'md',
                                className: I.descriptionIcon,
                                color: u.Z.unsafe_rawColors.GREEN_360.css,
                                secondaryColor: u.Z.unsafe_rawColors.WHITE_500.css
                            }),
                            j.intl.string(j.t.K2tn19)
                        ]
                    }),
                    (0, r.jsxs)('div', {
                        className: I.descriptionRow,
                        children: [
                            (0, r.jsx)(m.owK, {
                                size: 'md',
                                className: I.descriptionIcon,
                                color: u.Z.unsafe_rawColors.GREEN_360.css,
                                secondaryColor: u.Z.unsafe_rawColors.WHITE_500.css
                            }),
                            j.intl.string(j.t.om5gNj)
                        ]
                    }),
                    (0, r.jsxs)('div', {
                        className: I.descriptionRow,
                        children: [
                            (0, r.jsx)(m.owK, {
                                size: 'md',
                                className: I.descriptionIcon,
                                color: u.Z.unsafe_rawColors.GREEN_360.css,
                                secondaryColor: u.Z.unsafe_rawColors.WHITE_500.css
                            }),
                            j.intl.string(j.t['/VNqdH'])
                        ]
                    })
                ]
            }),
            (0, r.jsxs)('div', {
                className: I.descriptionSection,
                children: [
                    (0, r.jsx)(m.X6q, {
                        variant: 'eyebrow',
                        children: j.intl.string(j.t['8zhJEh'])
                    }),
                    (0, r.jsxs)('div', {
                        className: I.descriptionRow,
                        children: [
                            (0, r.jsx)(m.k$p, {
                                size: 'md',
                                className: I.descriptionIcon,
                                color: u.Z.unsafe_rawColors.RED_400.css,
                                secondaryColor: u.Z.unsafe_rawColors.WHITE_500.css
                            }),
                            j.intl.string(j.t.WOKI6u)
                        ]
                    }),
                    (0, r.jsxs)('div', {
                        className: I.descriptionRow,
                        children: [
                            (0, r.jsx)(m.k$p, {
                                size: 'md',
                                className: I.descriptionIcon,
                                color: u.Z.unsafe_rawColors.RED_400.css,
                                secondaryColor: u.Z.unsafe_rawColors.WHITE_500.css
                            }),
                            j.intl.string(j.t.ddhDJC)
                        ]
                    }),
                    (0, r.jsxs)('div', {
                        className: I.descriptionRow,
                        children: [
                            (0, r.jsx)(m.k$p, {
                                size: 'md',
                                className: I.descriptionIcon,
                                color: u.Z.unsafe_rawColors.RED_400.css,
                                secondaryColor: u.Z.unsafe_rawColors.WHITE_500.css
                            }),
                            j.intl.string(j.t['6Q/DHh'])
                        ]
                    })
                ]
            })
        ]
    });
}
function L(e) {
    let { cancel: t, confirm: n } = e;
    return (0, r.jsx)(m.sYh, {
        dismissable: !0,
        header: j.intl.string(j.t['cN/RFB']),
        confirmText: j.intl.string(j.t['cN/RFB']),
        cancelText: j.intl.string(j.t['ETE/oK']),
        onCancel: t,
        onConfirm: n,
        children: (0, r.jsx)(m.Text, {
            variant: 'text-md/normal',
            color: 'text-normal',
            children: j.intl.string(j.t.apCQv7)
        })
    });
}
function D() {
    let e = (0, d.e7)([S], () => S.name),
        t = (0, d.e7)([S], () => S.description),
        n = (0, d.e7)([S], () => S.error);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(m.xJW, {
                className: E.marginBottom20,
                title: j.intl.string(j.t.z1a9R0),
                error: null == n ? void 0 : n.getFirstFieldErrorMessage('name'),
                children: (0, r.jsx)(m.oil, {
                    value: e,
                    onChange: (e) => S.setName(e),
                    placeholder: j.intl.string(j.t.bMlpvr),
                    maxLength: 100
                })
            }),
            (0, r.jsx)(m.xJW, {
                className: E.marginBottom20,
                title: j.intl.string(j.t.GxirWV),
                error: null == n ? void 0 : n.getFirstFieldErrorMessage('description'),
                children: (0, r.jsx)(m.Kx8, {
                    value: t,
                    onChange: (e) => S.setDescription(e),
                    placeholder: j.intl.string(j.t.n1FBXl),
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
                  (0, r.jsx)(m.xJW, {
                      title: j.intl.string(j.t.zGGcLy),
                      children: (0, r.jsx)(g.Z, {
                          buttonLook: m.zxk.Looks.FILLED,
                          buttonColor: m.zxk.Colors.BRAND,
                          value: (0, f.Z)(n.code)
                      })
                  }),
                  n.isDirty &&
                      (0, r.jsx)(m.Text, {
                          color: 'text-warning',
                          className: E.marginTop8,
                          variant: 'text-sm/normal',
                          children: j.intl.string(j.t.aWsjtL)
                      }),
                  (0, r.jsxs)('div', {
                      className: a()(E.marginTop20, I.buttonContainer),
                      children: [
                          n.isDirty &&
                              (0, r.jsx)(P, {
                                  guild: t,
                                  guildTemplate: n
                              }),
                          (0, r.jsxs)('div', {
                              className: I.rightButtonContainer,
                              children: [
                                  (0, r.jsx)(w, {
                                      guild: t,
                                      guildTemplate: n
                                  }),
                                  (0, r.jsx)(M, { guildTemplate: n })
                              ]
                          })
                      ]
                  }),
                  n.isDirty &&
                      (0, r.jsx)('div', {
                          className: I.lastSync,
                          children: j.intl.format(j.t.v0AVur, { timestamp: new Date(n.updatedAt) })
                      })
              ]
          });
}
function k(e) {
    let { guild: t } = e,
        n = (0, d.e7)([S], () => S.name),
        [i, s] = l.useState(!1),
        a = async () => {
            S.setError(null), s(!0);
            try {
                await _.Z.createGuildTemplate(t.id, S.name, S.description);
            } catch (e) {
                S.setError(new p.Hx(e));
            }
            s(!1);
        };
    return (0, r.jsx)(m.zxk, {
        submitting: i,
        disabled: !(null != n && n.trim().length >= 2),
        color: m.zxk.Colors.BRAND,
        onClick: a,
        children: j.intl.string(j.t.Wxdi8P)
    });
}
function P(e) {
    let { guild: t, guildTemplate: n } = e,
        [i, s] = l.useState(!1),
        a = async () => {
            S.setError(null), s(!0);
            try {
                await _.Z.syncGuildTemplate(t.id, n.code);
            } catch (e) {
                S.setError(new p.Hx(e));
            }
            s(!1);
        };
    return (0, r.jsx)(m.zxk, {
        submitting: i,
        className: I.button,
        onClick: a,
        children: j.intl.string(j.t['Nw+0Y2'])
    });
}
function w(e) {
    let { guild: t, guildTemplate: n } = e,
        [i, s] = l.useState(!1),
        a = async () => {
            S.setError(null);
            try {
                await _.Z.deleteGuildTemplate(t.id, n.code), S.setName(''), S.setDescription('');
            } catch (e) {
                S.setError(new p.Hx(e));
            }
            s(!1);
        };
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(m.zxk, {
                look: m.zxk.Looks.OUTLINED,
                className: I.button,
                color: m.zxk.Colors.RED,
                onClick: () => s(!0),
                children: j.intl.string(j.t['cN/RFB'])
            }),
            i
                ? (0, r.jsx)(L, {
                      confirm: a,
                      cancel: () => s(!1)
                  })
                : null
        ]
    });
}
function M(e) {
    let { guildTemplate: t } = e;
    return (0, r.jsx)(m.zxk, {
        color: m.zxk.Colors.PRIMARY,
        className: I.button,
        onClick: () =>
            (0, m.ZDy)(async () => {
                let { default: e } = await Promise.all([n.e('10778'), n.e('22769')]).then(n.bind(n, 766775));
                return (n) =>
                    (0, r.jsx)(e, {
                        ...n,
                        guildTemplate: t
                    });
            }),
        children: j.intl.string(j.t.YI3iV1)
    });
}
