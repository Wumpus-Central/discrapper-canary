r.r(t), r.d(t, { default: () => b });
var n = r(200651);
r(192379);
var o = r(355467),
    c = r(106976),
    l = r(703656),
    i = r(914010),
    u = r(563132),
    p = r(791785),
    a = r(981631);
function b(e) {
    var t,
        r,
        { onClose: b, onComplete: f, forcesTransitionToGuild: s } = e,
        O = (function (e, t) {
            if (null == e) return {};
            var r,
                n,
                o = (function (e, t) {
                    if (null == e) return {};
                    var r,
                        n,
                        o = {},
                        c = Object.keys(e);
                    for (n = 0; n < c.length; n++) (r = c[n]), t.indexOf(r) >= 0 || (o[r] = e[r]);
                    return o;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var c = Object.getOwnPropertySymbols(e);
                for (n = 0; n < c.length; n++) (r = c[n]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r]);
            }
            return o;
        })(e, ['onClose', 'onComplete', 'forcesTransitionToGuild']);
    let { subscriptionMetadataRequest: y } = (0, u.JL)();
    return (0, n.jsx)(
        p.PaymentModal,
        ((t = (function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {},
                    n = Object.keys(r);
                'function' == typeof Object.getOwnPropertySymbols &&
                    (n = n.concat(
                        Object.getOwnPropertySymbols(r).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(r, e).enumerable;
                        })
                    )),
                    n.forEach(function (t) {
                        var n;
                        (n = r[t]),
                            t in e
                                ? Object.defineProperty(e, t, {
                                      value: n,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0
                                  })
                                : (e[t] = n);
                    });
            }
            return e;
        })({}, O)),
        (r = r =
            {
                onComplete: f,
                onClose: (e) => {
                    b(e);
                    let t = null == y ? void 0 : y.guild_id;
                    e && null != t && (o.jg(), (0, c.i1)(t), null == f || f(), null != t && (s || i.Z.getGuildId() !== t) && (0, l.uL)(a.Z5c.CHANNEL(t)));
                },
                forceNewPaymentModal: !0
            }),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : (function (e, t) {
                  var r = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var n = Object.getOwnPropertySymbols(e);
                      r.push.apply(r, n);
                  }
                  return r;
              })(Object(r)).forEach(function (e) {
                  Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
              }),
        t)
    );
}
