n.d(t, { Z: () => m }), n(47120);
var r = n(200651),
    i = n(481060),
    l = n(570140),
    o = n(317770),
    a = n(19780),
    s = n(594174),
    c = n(979651),
    u = n(960048),
    d = n(699910),
    p = n(981631);
function h(e, t, n) {
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
let g = 'CollectiblesExpiryModal';
class f extends o.Z {
    _initialize() {
        l.Z.subscribe('POST_CONNECTION_OPEN', this.handleMaybeOpenModal), l.Z.subscribe('CURRENT_USER_UPDATE', this.handleMaybeOpenModal);
    }
    _terminate() {
        l.Z.unsubscribe('POST_CONNECTION_OPEN', this.handleMaybeOpenModal), l.Z.unsubscribe('CURRENT_USER_UPDATE', this.handleMaybeOpenModal), null != this.timeout && (clearTimeout(this.timeout), (this.timeout = null));
    }
    constructor(...e) {
        super(...e),
            h(this, 'timeout', null),
            h(this, 'handleMaybeOpenModal', () => {
                var e, t;
                let n = s.default.getCurrentUser(),
                    r = null == n ? void 0 : null === (e = n.avatarDecoration) || void 0 === e ? void 0 : e.skuId,
                    i = null == n ? void 0 : null === (t = n.avatarDecoration) || void 0 === t ? void 0 : t.expiresAt;
                ('1251324401459265537' === r || '1252353273256480818' === r) && (i = 1726106879), null != i && (0, d.v)('CollectiblesExpiryManager') && (this.maybeOpenModal() || (null != this.timeout && clearTimeout(this.timeout), (this.timeout = setTimeout(this.maybeOpenModal, 1000 * i - Date.now() + 1000))));
            }),
            h(this, 'maybeOpenModal', () => {
                var e, t, l, o, d;
                let f = s.default.getCurrentUser(),
                    m = a.Z.getState(),
                    b = null == f ? void 0 : null === (e = f.avatarDecoration) || void 0 === e ? void 0 : e.skuId,
                    _ = null == f ? void 0 : null === (t = f.avatarDecoration) || void 0 === t ? void 0 : t.expiresAt;
                if ((('1251324401459265537' === b || '1252353273256480818' === b) && (_ = 1726106879), null == f)) return !1;
                let E = c.Z.getVoiceStateForUser(f.id);
                return null != _ && 1000 * _ < Date.now() && m !== p.hes.RTC_CONNECTED
                    ? ((0, i.Mr3)(g),
                      (0, i.ZDy)(
                          async () => {
                              let { default: e } = await n.e('77370').then(n.bind(n, 83950));
                              return (t) => {
                                  var n, i;
                                  return (0, r.jsx)(
                                      e,
                                      ((n = (function (e) {
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
                                                      h(e, t, n[t]);
                                                  });
                                          }
                                          return e;
                                      })({}, t)),
                                      (i = i = { skuId: b }),
                                      Object.getOwnPropertyDescriptors
                                          ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i))
                                          : (function (e, t) {
                                                var n = Object.keys(e);
                                                if (Object.getOwnPropertySymbols) {
                                                    var r = Object.getOwnPropertySymbols(e);
                                                    n.push.apply(n, r);
                                                }
                                                return n;
                                            })(Object(i)).forEach(function (e) {
                                                Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(i, e));
                                            }),
                                      n)
                                  );
                              };
                          },
                          { modalKey: g }
                      ),
                      u.Z.captureMessage('Collectible expiry modal shown'),
                      !0)
                    : (('1251324401459265537' === b || '1252353273256480818' === b) &&
                          u.Z.captureMessage('Collectible expiry modal not shown', {
                              tags: {
                                  isExpired: (null != _ && 1000 * _ < Date.now()).toString(),
                                  rtcConnected: (m === p.hes.RTC_CONNECTED).toString(),
                                  decoExpiresAt: null !== (o = null == _ ? void 0 : _.toString()) && void 0 !== o ? o : 'N/A',
                                  voiceStateAvailable: (null != E).toString(),
                                  selfStream: null !== (d = null == E ? void 0 : null === (l = E.selfStream) || void 0 === l ? void 0 : l.toString()) && void 0 !== d ? d : 'N/A'
                              }
                          }),
                      !1);
            });
    }
}
let m = new f();
