n.d(t, { Z: () => m }), n(388685);
var r = n(951288),
    i = n(481060),
    l = n(570140),
    a = n(317770),
    s = n(19780),
    o = n(594174),
    c = n(960048),
    u = n(981631);
function d(e, t, n) {
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
let p = "CollectiblesExpiryModal";
class f extends a.Z {
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
            d(this, "timeout", null),
            d(this, "handleMaybeOpenModal", () => {
                var e;
                let t = o.default.getCurrentUser(),
                    n = null == t || null == (e = t.avatarDecoration) ? void 0 : e.expiresAt;
                null != n &&
                    (this.maybeOpenModal() ||
                        (null != this.timeout && clearTimeout(this.timeout),
                        (this.timeout = setTimeout(this.maybeOpenModal, 1000 * n - Date.now() + 1000))));
            }),
            d(this, "maybeOpenModal", () => {
                var e, t;
                let l = o.default.getCurrentUser(),
                    a = s.Z.getState(),
                    f = null == l || null == (e = l.avatarDecoration) ? void 0 : e.skuId,
                    m = null == l || null == (t = l.avatarDecoration) ? void 0 : t.expiresAt;
                return (
                    null != l &&
                    !!(null != m && 1000 * m < Date.now()) &&
                    a !== u.hes.RTC_CONNECTED &&
                    ((0, i.Mr3)(p),
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
                                                        d(e, t, n[t]);
                                                    });
                                            }
                                            return e;
                                        })({}, t),
                                        { skuId: f },
                                    ),
                                );
                        },
                        { modalKey: p },
                    ),
                    c.Z.captureMessage("Collectible expiry modal shown"),
                    !0)
                );
            });
    }
}
let m = new f();
