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
function _(e, t) {
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
function p(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : _(Object(t)).forEach(function (n) {
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
        openMemberVerificationModal(e, t, o) {
            if (__OVERLAY__) return;
            m(e);
            let u = async (t) => {
                    await a.ZP.submitVerificationForm(e, t);
                },
                d = (0, s.K2)(e, 'MemberVerificationModalActionCreators');
            (0, i.ZD)(
                async () => {
                    let { default: t } = d ? await Promise.all([n.e('99916'), n.e('66921'), n.e('12492')]).then(n.bind(n, 309135)) : await Promise.all([n.e('99916'), n.e('80026'), n.e('92531'), n.e('16350')]).then(n.bind(n, 645264));
                    return (n) =>
                        (0, r.jsx)(
                            t,
                            p(f({}, n), {
                                guildId: e,
                                inviteKey: o,
                                onComplete: u,
                                onClose: function () {
                                    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                                    if (!e)
                                        if (l.rb.getState().hasUnsubmittedChanges) return void (0, l.PE)(!0);
                                        else h();
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
                let { default: i } = t ? await Promise.all([n.e('99916'), n.e('66921'), n.e('12492')]).then(n.bind(n, 309135)) : await Promise.all([n.e('99916'), n.e('80026'), n.e('92531'), n.e('16350')]).then(n.bind(n, 645264));
                return (t) =>
                    (0, r.jsx)(
                        i,
                        p(f({}, t), {
                            guildId: e,
                            isPreview: !0
                        })
                    );
            });
        }
    };
