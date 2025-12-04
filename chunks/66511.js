n.d(t, { Z: () => h });
var r = n(54381);
n(473749);
var i = n(952265),
    a = n(626135),
    o = n(863249),
    s = n(266395),
    l = n(592286),
    c = n(981631);
function u(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function d(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                u(e, t, n[t]);
            });
    }
    return e;
}
function f(e, t) {
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
            : f(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let _ = () => {
        a.default.track(c.rMx.MODAL_DISMISSED, { type: l.N4 });
    },
    m = (e) => {
        a.default.track(c.rMx.OPEN_MODAL, {
            type: l.N4,
            guild_id: e,
        });
    },
    h = {
        openMemberVerificationModal(e, t, a) {
            if (__OVERLAY__) return;
            m(e);
            let c = async (t) => {
                await o.ZP.submitVerificationForm(e, t);
            };
            (0, i.openModalLazy)(
                async () => {
                    let { default: t } = await Promise.all([n.e("44686"), n.e("74240")]).then(n.bind(n, 645264));
                    return (n) =>
                        (0, r.jsx)(
                            t,
                            p(d({}, n), {
                                guildId: e,
                                inviteKey: a,
                                onComplete: c,
                                onClose: async function () {
                                    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                                    if (!e)
                                        if (s.rb.getState().hasUnsubmittedChanges) return void (0, s.PE)(!0);
                                        else _();
                                    await n.onClose();
                                },
                            }),
                        );
                },
                {
                    modalKey: l.Pn,
                    onCloseRequest: () => {
                        _(), s.rb.getState().hasUnsubmittedChanges ? (0, s.PE)(!0) : (0, i.closeModal)(l.Pn);
                    },
                    onCloseCallback: t,
                },
            );
        },
        closeMemberVerificationModal() {
            let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            e || _(), (0, i.closeModal)(l.Pn);
        },
        openMemberVerificationPreviewModal(e) {
            (0, i.openModalLazy)(async () => {
                let { default: t } = await Promise.all([n.e("44686"), n.e("74240")]).then(n.bind(n, 645264));
                return (n) =>
                    (0, r.jsx)(
                        t,
                        p(d({}, n), {
                            guildId: e,
                            isPreview: !0,
                        }),
                    );
            });
        },
    };
