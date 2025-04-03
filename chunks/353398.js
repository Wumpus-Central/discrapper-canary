n.d(t, {
    Q5: () => S,
    Sf: () => E,
    ZP: () => T
}),
    n(566702),
    n(266796),
    n(47120);
var r,
    i = n(200651),
    s = n(192379),
    a = n(120356),
    l = n.n(a),
    o = n(512722),
    c = n.n(o),
    d = n(442837),
    u = n(692547),
    m = n(481060),
    g = n(570140),
    p = n(484614),
    h = n(852860),
    f = n(881052),
    b = n(751189),
    x = n(409059),
    j = n(518936),
    N = n(999382),
    _ = n(58346),
    v = n(388032),
    C = n(651412),
    O = n(20493);
function y(e, t, n) {
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
class I extends (r = d.ZP.Store) {
    getTemplate() {
        let e = N.Z.getProps().guild;
        if (null == e) return null;
        let t = x.Z.getForGuild(e.id);
        return null != t && t.state !== _.Rj.RESOLVING ? t : null;
    }
    showNotice() {
        let e = this.getTemplate();
        return null != e && null != this.name && '' !== this.name && (this.name.trim() !== e.name || this.description.trim() !== e.description);
    }
    constructor(...e) {
        super(...e),
            y(this, 'name', ''),
            y(this, 'description', ''),
            y(this, 'error', null),
            y(this, 'reset', () => {
                let e = this.getTemplate();
                if (null != e) {
                    var t, n;
                    (this.name = null != (t = e.name) ? t : this.name), (this.description = null != (n = e.description) ? n : this.description);
                } else (this.name = ''), (this.description = '');
                this.emitChange();
            }),
            y(this, 'setName', (e) => {
                (this.name = e), this.emitChange();
            }),
            y(this, 'setDescription', (e) => {
                (this.description = e), this.emitChange();
            }),
            y(this, 'setError', (e) => {
                (this.error = e), this.emitChange();
            }),
            y(this, 'save', async () => {
                await b.Z.updateGuildTemplate(N.Z.getProps().guild.id, this.getTemplate().code, this.name, this.description), this.emitChange();
            });
    }
}
y(I, 'displayName', 'GuildSettingsTemplateMetadataStore_');
let E = new I(g.Z);
function S() {
    let [e, t] = s.useState(!1),
        n = async () => {
            t(!0), await E.save(), t(!1);
        };
    return (0, i.jsx)(h.Z, {
        submitting: e,
        onReset: E.reset,
        onSave: n
    });
}
function T() {
    return (0, i.jsx)(m.hjN, {
        className: O.marginBottom4,
        children: (0, i.jsxs)(m.y5t, {
            component: (0, i.jsx)(m.vwX, {
                tag: m.RB0.H1,
                children: v.NW.string(v.t.KUw7Sk)
            }),
            children: [
                (0, i.jsx)(m.R94, {
                    className: O.marginBottom20,
                    type: m.geA.DESCRIPTION,
                    children: v.NW.format(v.t.c0m8bG, {})
                }),
                (0, i.jsx)(w, {}),
                (0, i.jsx)(m.$i$, { className: C.divider }),
                (0, i.jsx)(P, {})
            ]
        })
    });
}
function P() {
    let { guild: e } = N.Z.getProps();
    c()(null != e, 'guild cannot be null');
    let t = (0, d.e7)([E], () => E.error),
        [n, r] = s.useState(!0),
        { loading: a, guildTemplate: l } = (function (e) {
            let [t, n] = s.useState(!0);
            return (
                s.useEffect(() => {
                    !(async function () {
                        n(!0);
                        try {
                            await b.Z.loadTemplatesForGuild(e), n(!1);
                        } catch (e) {
                            E.setError(new f.Hx(e));
                        }
                    })();
                }, [e]),
                {
                    loading: t,
                    guildTemplate: (0, d.e7)([x.Z], () => x.Z.getForGuild(e), [e])
                }
            );
        })(e.id);
    if (
        (s.useEffect(() => {
            if (n && !a) {
                if (null != l) {
                    var e, t;
                    E.setName(null != (e = l.name) ? e : ''), E.setDescription(null != (t = l.description) ? t : '');
                }
                r(!1);
            }
        }, [n, l, a]),
        s.useEffect(
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
            : (0, i.jsx)(m.$jN, { className: O.marginTop40 });
    let o = null != t && null == t.getFirstFieldErrorMessage('name') && null == t.getFirstFieldErrorMessage('description');
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(Z, {}),
            (0, i.jsx)(D, {
                guild: e,
                guildTemplate: l
            }),
            o
                ? (0, i.jsx)(m.Text, {
                      className: O.marginTop8,
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
                        children: v.NW.string(v.t['f8u+VF'])
                    }),
                    (0, i.jsxs)('div', {
                        className: C.descriptionRow,
                        children: [
                            (0, i.jsx)(m.owK, {
                                size: 'md',
                                className: C.descriptionIcon,
                                color: u.Z.unsafe_rawColors.GREEN_360.css,
                                secondaryColor: u.Z.unsafe_rawColors.WHITE_500.css
                            }),
                            v.NW.string(v.t.K2tn19)
                        ]
                    }),
                    (0, i.jsxs)('div', {
                        className: C.descriptionRow,
                        children: [
                            (0, i.jsx)(m.owK, {
                                size: 'md',
                                className: C.descriptionIcon,
                                color: u.Z.unsafe_rawColors.GREEN_360.css,
                                secondaryColor: u.Z.unsafe_rawColors.WHITE_500.css
                            }),
                            v.NW.string(v.t.om5gNj)
                        ]
                    }),
                    (0, i.jsxs)('div', {
                        className: C.descriptionRow,
                        children: [
                            (0, i.jsx)(m.owK, {
                                size: 'md',
                                className: C.descriptionIcon,
                                color: u.Z.unsafe_rawColors.GREEN_360.css,
                                secondaryColor: u.Z.unsafe_rawColors.WHITE_500.css
                            }),
                            v.NW.string(v.t['/VNqdH'])
                        ]
                    })
                ]
            }),
            (0, i.jsxs)('div', {
                className: C.descriptionSection,
                children: [
                    (0, i.jsx)(m.X6q, {
                        variant: 'eyebrow',
                        children: v.NW.string(v.t['8zhJEh'])
                    }),
                    (0, i.jsxs)('div', {
                        className: C.descriptionRow,
                        children: [
                            (0, i.jsx)(m.k$p, {
                                size: 'md',
                                className: C.descriptionIcon,
                                color: u.Z.unsafe_rawColors.RED_400.css,
                                secondaryColor: u.Z.unsafe_rawColors.WHITE_500.css
                            }),
                            v.NW.string(v.t.WOKI6u)
                        ]
                    }),
                    (0, i.jsxs)('div', {
                        className: C.descriptionRow,
                        children: [
                            (0, i.jsx)(m.k$p, {
                                size: 'md',
                                className: C.descriptionIcon,
                                color: u.Z.unsafe_rawColors.RED_400.css,
                                secondaryColor: u.Z.unsafe_rawColors.WHITE_500.css
                            }),
                            v.NW.string(v.t.ddhDJC)
                        ]
                    }),
                    (0, i.jsxs)('div', {
                        className: C.descriptionRow,
                        children: [
                            (0, i.jsx)(m.k$p, {
                                size: 'md',
                                className: C.descriptionIcon,
                                color: u.Z.unsafe_rawColors.RED_400.css,
                                secondaryColor: u.Z.unsafe_rawColors.WHITE_500.css
                            }),
                            v.NW.string(v.t['6Q/DHh'])
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
        header: v.NW.string(v.t['cN/RFB']),
        confirmText: v.NW.string(v.t['cN/RFB']),
        cancelText: v.NW.string(v.t['ETE/oK']),
        onCancel: t,
        onConfirm: n,
        children: (0, i.jsx)(m.Text, {
            variant: 'text-md/normal',
            color: 'text-normal',
            children: v.NW.string(v.t.apCQv7)
        })
    });
}
function Z() {
    let e = (0, d.e7)([E], () => E.name),
        t = (0, d.e7)([E], () => E.description),
        n = (0, d.e7)([E], () => E.error);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(m.xJW, {
                className: O.marginBottom20,
                title: v.NW.string(v.t.z1a9R0),
                error: null == n ? void 0 : n.getFirstFieldErrorMessage('name'),
                children: (0, i.jsx)(m.oil, {
                    value: e,
                    onChange: (e) => E.setName(e),
                    placeholder: v.NW.string(v.t.bMlpvr),
                    maxLength: 100
                })
            }),
            (0, i.jsx)(m.xJW, {
                className: O.marginBottom20,
                title: v.NW.string(v.t.GxirWV),
                error: null == n ? void 0 : n.getFirstFieldErrorMessage('description'),
                children: (0, i.jsx)(m.Kx8, {
                    value: t,
                    onChange: (e) => E.setDescription(e),
                    placeholder: v.NW.string(v.t.n1FBXl),
                    maxLength: 120
                })
            })
        ]
    });
}
function D(e) {
    let { guild: t, guildTemplate: n } = e;
    return null == n
        ? (0, i.jsx)(A, { guild: t })
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(m.xJW, {
                      title: v.NW.string(v.t.zGGcLy),
                      children: (0, i.jsx)(p.Z, {
                          buttonLook: m.zxk.Looks.FILLED,
                          buttonColor: m.zxk.Colors.BRAND,
                          value: (0, j.Z)(n.code)
                      })
                  }),
                  n.isDirty &&
                      (0, i.jsx)(m.Text, {
                          color: 'text-warning',
                          className: O.marginTop8,
                          variant: 'text-sm/normal',
                          children: v.NW.string(v.t.aWsjtL)
                      }),
                  (0, i.jsxs)('div', {
                      className: l()(O.marginTop20, C.buttonContainer),
                      children: [
                          n.isDirty &&
                              (0, i.jsx)(k, {
                                  guild: t,
                                  guildTemplate: n
                              }),
                          (0, i.jsxs)('div', {
                              className: C.rightButtonContainer,
                              children: [
                                  (0, i.jsx)(W, {
                                      guild: t,
                                      guildTemplate: n
                                  }),
                                  (0, i.jsx)(L, { guildTemplate: n })
                              ]
                          })
                      ]
                  }),
                  n.isDirty &&
                      (0, i.jsx)('div', {
                          className: C.lastSync,
                          children: v.NW.format(v.t.v0AVur, { timestamp: new Date(n.updatedAt) })
                      })
              ]
          });
}
function A(e) {
    let { guild: t } = e,
        n = (0, d.e7)([E], () => E.name),
        [r, a] = s.useState(!1),
        l = async () => {
            E.setError(null), a(!0);
            try {
                await b.Z.createGuildTemplate(t.id, E.name, E.description);
            } catch (e) {
                E.setError(new f.Hx(e));
            }
            a(!1);
        };
    return (0, i.jsx)(m.zxk, {
        submitting: r,
        disabled: !(null != n && n.trim().length >= 2),
        color: m.zxk.Colors.BRAND,
        onClick: l,
        children: v.NW.string(v.t.Wxdi8P)
    });
}
function k(e) {
    let { guild: t, guildTemplate: n } = e,
        [r, a] = s.useState(!1),
        l = async () => {
            E.setError(null), a(!0);
            try {
                await b.Z.syncGuildTemplate(t.id, n.code);
            } catch (e) {
                E.setError(new f.Hx(e));
            }
            a(!1);
        };
    return (0, i.jsx)(m.zxk, {
        submitting: r,
        className: C.button,
        onClick: l,
        children: v.NW.string(v.t['Nw+0Y2'])
    });
}
function W(e) {
    let { guild: t, guildTemplate: n } = e,
        [r, a] = s.useState(!1),
        l = async () => {
            E.setError(null);
            try {
                await b.Z.deleteGuildTemplate(t.id, n.code), E.setName(''), E.setDescription('');
            } catch (e) {
                E.setError(new f.Hx(e));
            }
            a(!1);
        };
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(m.zxk, {
                look: m.zxk.Looks.OUTLINED,
                className: C.button,
                color: m.zxk.Colors.RED,
                onClick: () => a(!0),
                children: v.NW.string(v.t['cN/RFB'])
            }),
            r
                ? (0, i.jsx)(R, {
                      confirm: l,
                      cancel: () => a(!1)
                  })
                : null
        ]
    });
}
function L(e) {
    let { guildTemplate: t } = e;
    return (0, i.jsx)(m.zxk, {
        color: m.zxk.Colors.PRIMARY,
        className: C.button,
        onClick: () =>
            (0, m.ZDy)(async () => {
                let { default: e } = await Promise.all([n.e('10778'), n.e('44044')]).then(n.bind(n, 766775));
                return (n) => {
                    var r, s;
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
                                        y(e, t, n[t]);
                                    });
                            }
                            return e;
                        })({}, n)),
                        (s = s = { guildTemplate: t }),
                        Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(s))
                            : (function (e, t) {
                                  var n = Object.keys(e);
                                  if (Object.getOwnPropertySymbols) {
                                      var r = Object.getOwnPropertySymbols(e);
                                      n.push.apply(n, r);
                                  }
                                  return n;
                              })(Object(s)).forEach(function (e) {
                                  Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(s, e));
                              }),
                        r)
                    );
                };
            }),
        children: v.NW.string(v.t.YI3iV1)
    });
}
