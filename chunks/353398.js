n.d(t, {
    Q5: () => S,
    Sf: () => E,
    ZP: () => T
}),
    n(781311),
    n(953529),
    n(388685);
var r,
    i = n(200651),
    l = n(192379),
    s = n(120356),
    a = n.n(s),
    o = n(512722),
    c = n.n(o),
    u = n(442837),
    d = n(692547),
    m = n(481060),
    g = n(570140),
    p = n(484614),
    f = n(852860),
    h = n(881052),
    x = n(751189),
    b = n(409059),
    j = n(518936),
    _ = n(999382),
    v = n(260539),
    O = n(388032),
    C = n(651412),
    y = n(20493);
function N(e, t, n) {
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
class I extends (r = u.ZP.Store) {
    getTemplate() {
        let e = _.Z.getProps().guild;
        if (null == e) return null;
        let t = b.Z.getForGuild(e.id);
        return null != t && t.state !== v.Rj.RESOLVING ? t : null;
    }
    showNotice() {
        let e = this.getTemplate();
        return null != e && null != this.name && '' !== this.name && (this.name.trim() !== e.name || this.description.trim() !== e.description);
    }
    constructor(...e) {
        super(...e),
            N(this, 'name', ''),
            N(this, 'description', ''),
            N(this, 'error', null),
            N(this, 'reset', () => {
                let e = this.getTemplate();
                if (null != e) {
                    var t, n;
                    (this.name = null != (t = e.name) ? t : this.name), (this.description = null != (n = e.description) ? n : this.description);
                } else (this.name = ''), (this.description = '');
                this.emitChange();
            }),
            N(this, 'setName', (e) => {
                (this.name = e), this.emitChange();
            }),
            N(this, 'setDescription', (e) => {
                (this.description = e), this.emitChange();
            }),
            N(this, 'setError', (e) => {
                (this.error = e), this.emitChange();
            }),
            N(this, 'save', async () => {
                await x.Z.updateGuildTemplate(_.Z.getProps().guild.id, this.getTemplate().code, this.name, this.description), this.emitChange();
            });
    }
}
N(I, 'displayName', 'GuildSettingsTemplateMetadataStore_');
let E = new I(g.Z);
function S() {
    let [e, t] = l.useState(!1),
        n = async () => {
            t(!0), await E.save(), t(!1);
        };
    return (0, i.jsx)(f.Z, {
        submitting: e,
        onReset: E.reset,
        onSave: n
    });
}
function T() {
    return (0, i.jsx)(m.hjN, {
        className: y.marginBottom4,
        children: (0, i.jsxs)(m.y5t, {
            component: (0, i.jsx)(m.vwX, {
                tag: m.RB0.H1,
                children: O.intl.string(O.t.KUw7Sk)
            }),
            children: [
                (0, i.jsx)(m.R94, {
                    className: y.marginBottom20,
                    type: m.geA.DESCRIPTION,
                    children: O.intl.format(O.t.c0m8bG, {})
                }),
                (0, i.jsx)(w, {}),
                (0, i.jsx)(m.$i$, { className: C.divider }),
                (0, i.jsx)(P, {})
            ]
        })
    });
}
function P() {
    let { guild: e } = _.Z.getProps();
    c()(null != e, 'guild cannot be null');
    let t = (0, u.e7)([E], () => E.error),
        [n, r] = l.useState(!0),
        { loading: s, guildTemplate: a } = (function (e) {
            let [t, n] = l.useState(!0);
            return (
                l.useEffect(() => {
                    !(async function () {
                        n(!0);
                        try {
                            await x.Z.loadTemplatesForGuild(e), n(!1);
                        } catch (e) {
                            E.setError(new h.Hx(e));
                        }
                    })();
                }, [e]),
                {
                    loading: t,
                    guildTemplate: (0, u.e7)([b.Z], () => b.Z.getForGuild(e), [e])
                }
            );
        })(e.id);
    if (
        (l.useEffect(() => {
            if (n && !s) {
                if (null != a) {
                    var e, t;
                    E.setName(null != (e = a.name) ? e : ''), E.setDescription(null != (t = a.description) ? t : '');
                }
                r(!1);
            }
        }, [n, a, s]),
        l.useEffect(
            () => () => {
                E.reset(), E.setError(null);
            },
            []
        ),
        n)
    )
        return null != t
            ? (0, i.jsx)(m.Text, {
                  color: 'text-danger',
                  variant: 'text-sm/normal',
                  children: t.message
              })
            : (0, i.jsx)(m.$jN, { className: y.marginTop40 });
    let o = null != t && null == t.getFirstFieldErrorMessage('name') && null == t.getFirstFieldErrorMessage('description');
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(Z, {}),
            (0, i.jsx)(D, {
                guild: e,
                guildTemplate: a
            }),
            o
                ? (0, i.jsx)(m.Text, {
                      className: y.marginTop8,
                      color: 'text-danger',
                      variant: 'text-sm/normal',
                      children: t.getAnyErrorMessage()
                  })
                : null
        ]
    });
}
function w() {
    return (0, i.jsxs)('div', {
        className: C.descriptionBox,
        children: [
            (0, i.jsxs)('div', {
                className: C.descriptionSection,
                children: [
                    (0, i.jsx)(m.X6q, {
                        variant: 'eyebrow',
                        children: O.intl.string(O.t['f8u+VF'])
                    }),
                    (0, i.jsxs)('div', {
                        className: C.descriptionRow,
                        children: [
                            (0, i.jsx)(m.owK, {
                                size: 'md',
                                className: C.descriptionIcon,
                                color: d.Z.unsafe_rawColors.GREEN_360.css,
                                secondaryColor: d.Z.unsafe_rawColors.WHITE_500.css
                            }),
                            O.intl.string(O.t.K2tn19)
                        ]
                    }),
                    (0, i.jsxs)('div', {
                        className: C.descriptionRow,
                        children: [
                            (0, i.jsx)(m.owK, {
                                size: 'md',
                                className: C.descriptionIcon,
                                color: d.Z.unsafe_rawColors.GREEN_360.css,
                                secondaryColor: d.Z.unsafe_rawColors.WHITE_500.css
                            }),
                            O.intl.string(O.t.om5gNj)
                        ]
                    }),
                    (0, i.jsxs)('div', {
                        className: C.descriptionRow,
                        children: [
                            (0, i.jsx)(m.owK, {
                                size: 'md',
                                className: C.descriptionIcon,
                                color: d.Z.unsafe_rawColors.GREEN_360.css,
                                secondaryColor: d.Z.unsafe_rawColors.WHITE_500.css
                            }),
                            O.intl.string(O.t['/VNqdH'])
                        ]
                    })
                ]
            }),
            (0, i.jsxs)('div', {
                className: C.descriptionSection,
                children: [
                    (0, i.jsx)(m.X6q, {
                        variant: 'eyebrow',
                        children: O.intl.string(O.t['8zhJEh'])
                    }),
                    (0, i.jsxs)('div', {
                        className: C.descriptionRow,
                        children: [
                            (0, i.jsx)(m.k$p, {
                                size: 'md',
                                className: C.descriptionIcon,
                                color: d.Z.unsafe_rawColors.RED_400.css,
                                secondaryColor: d.Z.unsafe_rawColors.WHITE_500.css
                            }),
                            O.intl.string(O.t.WOKI6u)
                        ]
                    }),
                    (0, i.jsxs)('div', {
                        className: C.descriptionRow,
                        children: [
                            (0, i.jsx)(m.k$p, {
                                size: 'md',
                                className: C.descriptionIcon,
                                color: d.Z.unsafe_rawColors.RED_400.css,
                                secondaryColor: d.Z.unsafe_rawColors.WHITE_500.css
                            }),
                            O.intl.string(O.t.ddhDJC)
                        ]
                    }),
                    (0, i.jsxs)('div', {
                        className: C.descriptionRow,
                        children: [
                            (0, i.jsx)(m.k$p, {
                                size: 'md',
                                className: C.descriptionIcon,
                                color: d.Z.unsafe_rawColors.RED_400.css,
                                secondaryColor: d.Z.unsafe_rawColors.WHITE_500.css
                            }),
                            O.intl.string(O.t['6Q/DHh'])
                        ]
                    })
                ]
            })
        ]
    });
}
function R(e) {
    let { cancel: t, confirm: n } = e;
    return (0, i.jsx)(m.sYh, {
        dismissable: !0,
        header: O.intl.string(O.t['cN/RFB']),
        confirmText: O.intl.string(O.t['cN/RFB']),
        cancelText: O.intl.string(O.t['ETE/oK']),
        onCancel: t,
        onConfirm: n,
        children: (0, i.jsx)(m.Text, {
            variant: 'text-md/normal',
            color: 'text-normal',
            children: O.intl.string(O.t.apCQv7)
        })
    });
}
function Z() {
    let e = (0, u.e7)([E], () => E.name),
        t = (0, u.e7)([E], () => E.description),
        n = (0, u.e7)([E], () => E.error);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(m.xJW, {
                className: y.marginBottom20,
                title: O.intl.string(O.t.z1a9R0),
                error: null == n ? void 0 : n.getFirstFieldErrorMessage('name'),
                children: (0, i.jsx)(m.oil, {
                    value: e,
                    onChange: (e) => E.setName(e),
                    placeholder: O.intl.string(O.t.bMlpvr),
                    maxLength: 100
                })
            }),
            (0, i.jsx)(m.xJW, {
                className: y.marginBottom20,
                title: O.intl.string(O.t.GxirWV),
                error: null == n ? void 0 : n.getFirstFieldErrorMessage('description'),
                children: (0, i.jsx)(m.Kx8, {
                    value: t,
                    onChange: (e) => E.setDescription(e),
                    placeholder: O.intl.string(O.t.n1FBXl),
                    maxLength: 120
                })
            })
        ]
    });
}
function D(e) {
    let { guild: t, guildTemplate: n } = e;
    return null == n
        ? (0, i.jsx)(k, { guild: t })
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(m.xJW, {
                      title: O.intl.string(O.t.zGGcLy),
                      children: (0, i.jsx)(p.Z, {
                          buttonLook: m.zxk.Looks.FILLED,
                          buttonColor: m.zxk.Colors.BRAND,
                          value: (0, j.Z)(n.code)
                      })
                  }),
                  n.isDirty &&
                      (0, i.jsx)(m.Text, {
                          color: 'text-warning',
                          className: y.marginTop8,
                          variant: 'text-sm/normal',
                          children: O.intl.string(O.t.aWsjtL)
                      }),
                  (0, i.jsxs)('div', {
                      className: a()(y.marginTop20, C.buttonContainer),
                      children: [
                          n.isDirty &&
                              (0, i.jsx)(A, {
                                  guild: t,
                                  guildTemplate: n
                              }),
                          (0, i.jsxs)('div', {
                              className: C.rightButtonContainer,
                              children: [
                                  (0, i.jsx)(L, {
                                      guild: t,
                                      guildTemplate: n
                                  }),
                                  (0, i.jsx)(M, { guildTemplate: n })
                              ]
                          })
                      ]
                  }),
                  n.isDirty &&
                      (0, i.jsx)('div', {
                          className: C.lastSync,
                          children: O.intl.format(O.t.v0AVur, { timestamp: new Date(n.updatedAt) })
                      })
              ]
          });
}
function k(e) {
    let { guild: t } = e,
        n = (0, u.e7)([E], () => E.name),
        [r, s] = l.useState(!1),
        a = async () => {
            E.setError(null), s(!0);
            try {
                await x.Z.createGuildTemplate(t.id, E.name, E.description);
            } catch (e) {
                E.setError(new h.Hx(e));
            }
            s(!1);
        };
    return (0, i.jsx)(m.zxk, {
        submitting: r,
        disabled: !(null != n && n.trim().length >= 2),
        color: m.zxk.Colors.BRAND,
        onClick: a,
        children: O.intl.string(O.t.Wxdi8P)
    });
}
function A(e) {
    let { guild: t, guildTemplate: n } = e,
        [r, s] = l.useState(!1),
        a = async () => {
            E.setError(null), s(!0);
            try {
                await x.Z.syncGuildTemplate(t.id, n.code);
            } catch (e) {
                E.setError(new h.Hx(e));
            }
            s(!1);
        };
    return (0, i.jsx)(m.zxk, {
        submitting: r,
        className: C.button,
        onClick: a,
        children: O.intl.string(O.t['Nw+0Y2'])
    });
}
function L(e) {
    let { guild: t, guildTemplate: n } = e,
        [r, s] = l.useState(!1),
        a = async () => {
            E.setError(null);
            try {
                await x.Z.deleteGuildTemplate(t.id, n.code), E.setName(''), E.setDescription('');
            } catch (e) {
                E.setError(new h.Hx(e));
            }
            s(!1);
        };
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(m.zxk, {
                look: m.zxk.Looks.OUTLINED,
                className: C.button,
                color: m.zxk.Colors.RED,
                onClick: () => s(!0),
                children: O.intl.string(O.t['cN/RFB'])
            }),
            r
                ? (0, i.jsx)(R, {
                      confirm: a,
                      cancel: () => s(!1)
                  })
                : null
        ]
    });
}
function M(e) {
    let { guildTemplate: t } = e;
    return (0, i.jsx)(m.zxk, {
        color: m.zxk.Colors.PRIMARY,
        className: C.button,
        onClick: () =>
            (0, m.ZDy)(async () => {
                let { default: e } = await Promise.all([n.e('10778'), n.e('44044')]).then(n.bind(n, 766775));
                return (n) => {
                    var r, l;
                    return (0, i.jsx)(
                        e,
                        ((r = (function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {},
                                    r = Object.keys(n);
                                'function' == typeof Object.getOwnPropertySymbols &&
                                    (r = r.concat(
                                        Object.getOwnPropertySymbols(n).filter(function (e) {
                                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                        })
                                    )),
                                    r.forEach(function (t) {
                                        N(e, t, n[t]);
                                    });
                            }
                            return e;
                        })({}, n)),
                        (l = l = { guildTemplate: t }),
                        Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(l))
                            : (function (e, t) {
                                  var n = Object.keys(e);
                                  if (Object.getOwnPropertySymbols) {
                                      var r = Object.getOwnPropertySymbols(e);
                                      n.push.apply(n, r);
                                  }
                                  return n;
                              })(Object(l)).forEach(function (e) {
                                  Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(l, e));
                              }),
                        r)
                    );
                };
            }),
        children: O.intl.string(O.t.YI3iV1)
    });
}
