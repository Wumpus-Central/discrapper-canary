n.d(t, { Z: () => g });
var r = n(200651);
n(192379);
var i = n(952265),
    o = n(626135),
    a = n(863249),
    s = n(63568),
    l = n(266395),
    c = n(592286),
    u = n(981631);
function d(e, t, n) {
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
function f(e) {
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
                d(e, t, n[t]);
            });
    }
    return e;
}
function p(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function _(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : p(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let h = () => {
        o.default.track(u.rMx.MODAL_DISMISSED, { type: c.N4 });
    },
    m = (e) => {
        o.default.track(u.rMx.OPEN_MODAL, {
            type: c.N4,
            guild_id: e
        });
    },
    g = {
        openMemberVerificationModal(e, t) {
            if (__OVERLAY__) return;
            m(e);
            let o = async (t) => {
                    await a.ZP.submitVerificationForm(e, t);
                },
                u = (0, s.K2)(e, 'MemberVerificationModalActionCreators');
            (0, i.ZD)(
                async () => {
                    let { default: t } = u ? await Promise.all([n.e('84335'), n.e('54408'), n.e('99916'), n.e('10409'), n.e('23303')]).then(n.bind(n, 309135)) : await Promise.all([n.e('99916'), n.e('81038'), n.e('95676')]).then(n.bind(n, 645264));
                    return (n) =>
                        (0, r.jsx)(
                            t,
                            _(f({}, n), {
                                guildId: e,
                                onComplete: o,
                                onClose: function () {
                                    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                                    if (!e) {
                                        if (l.rb.getState().hasUnsubmittedChanges) {
                                            (0, l.PE)(!0);
                                            return;
                                        }
                                        h();
                                    }
                                    n.onClose();
                                }
                            })
                        );
                },
                {
                    modalKey: c.Pn,
                    onCloseRequest: () => {
                        h(), l.rb.getState().hasUnsubmittedChanges ? (0, l.PE)(!0) : (0, i.Mr)(c.Pn);
                    },
                    onCloseCallback: t
                }
            );
        },
        closeMemberVerificationModal() {
            let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            e || h(), (0, i.Mr)(c.Pn);
        },
        openMemberVerificationPreviewModal(e) {
            let t = (0, s.K2)(e, 'openMemberVerificationPreviewModal');
            (0, i.ZD)(async () => {
                let { default: i } = t ? await Promise.all([n.e('84335'), n.e('54408'), n.e('99916'), n.e('10409'), n.e('23303')]).then(n.bind(n, 309135)) : await Promise.all([n.e('99916'), n.e('81038'), n.e('95676')]).then(n.bind(n, 645264));
                return (t) =>
                    (0, r.jsx)(
                        i,
                        _(f({}, t), {
                            guildId: e,
                            isPreview: !0
                        })
                    );
            });
        }
    };
