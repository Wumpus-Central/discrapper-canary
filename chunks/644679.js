n.d(t, { Z: () => h }), n(388685);
var r = n(54381),
    i = n(481060),
    l = n(570140),
    a = n(317770),
    o = n(19780),
    s = n(594174),
    c = n(960048),
    u = n(215023),
    d = n(981631);
function p(e, t, n) {
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
let f = "CollectiblesExpiryModal";
class g extends a.Z {
    _initialize() {
        l.Z.subscribe("POST_CONNECTION_OPEN", this.handleMaybeOpenModal),
            l.Z.subscribe("CURRENT_USER_UPDATE", this.handleMaybeOpenModal);
    }
    _terminate() {
        l.Z.unsubscribe("POST_CONNECTION_OPEN", this.handleMaybeOpenModal),
            l.Z.unsubscribe("CURRENT_USER_UPDATE", this.handleMaybeOpenModal),
            null != this.timeout && (clearTimeout(this.timeout), (this.timeout = null));
    }
    constructor(...e) {
        super(...e),
            p(this, "timeout", null),
            p(this, "handleMaybeOpenModal", () => {
                var e;
                let t = s.default.getCurrentUser(),
                    n = null == t || null == (e = t.avatarDecoration) ? void 0 : e.expiresAt;
                null != n &&
                    (this.maybeOpenModal() ||
                        (null != this.timeout && clearTimeout(this.timeout),
                        (this.timeout = setTimeout(this.maybeOpenModal, 1000 * n - Date.now() + 1000))));
            }),
            p(this, "maybeOpenModal", () => {
                var e, t;
                let l = s.default.getCurrentUser(),
                    a = o.Z.getState(),
                    g = null == l || null == (e = l.avatarDecoration) ? void 0 : e.skuId,
                    h = null == l || null == (t = l.avatarDecoration) ? void 0 : t.expiresAt,
                    m = null != g && u.Hl.includes(g);
                return (
                    null != l &&
                    !m &&
                    !!(null != h && 1000 * h < Date.now()) &&
                    a !== d.hes.RTC_CONNECTED &&
                    ((0, i.Mr3)(f),
                    (0, i.ZDy)(
                        async () => {
                            let { default: e } = await n.e("77370").then(n.bind(n, 83950));
                            return (t) =>
                                (0, r.jsx)(
                                    e,
                                    (function (e, t) {
                                        return (
                                            (t = null != t ? t : {}),
                                            Object.getOwnPropertyDescriptors
                                                ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
                                                : (function (e, t) {
                                                      var n = Object.keys(e);
                                                      if (Object.getOwnPropertySymbols) {
                                                          var r = Object.getOwnPropertySymbols(e);
                                                          n.push.apply(n, r);
                                                      }
                                                      return n;
                                                  })(Object(t)).forEach(function (n) {
                                                      Object.defineProperty(
                                                          e,
                                                          n,
                                                          Object.getOwnPropertyDescriptor(t, n),
                                                      );
                                                  }),
                                            e
                                        );
                                    })(
                                        (function (e) {
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
                                                        p(e, t, n[t]);
                                                    });
                                            }
                                            return e;
                                        })({}, t),
                                        { skuId: g },
                                    ),
                                );
                        },
                        { modalKey: f },
                    ),
                    c.Z.captureMessage("Collectible expiry modal shown"),
                    !0)
                );
            });
    }
}
let h = new g();
