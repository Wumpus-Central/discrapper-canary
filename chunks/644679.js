n(47120);
var i = n(200651),
    r = n(481060),
    l = n(570140),
    a = n(317770),
    s = n(19780),
    o = n(594174),
    c = n(979651),
    d = n(960048),
    u = n(699910),
    h = n(981631);
function m(e, t, n) {
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
let p = 'CollectiblesExpiryModal';
class g extends a.Z {
    _initialize() {
        l.Z.subscribe('POST_CONNECTION_OPEN', this.handleMaybeOpenModal), l.Z.subscribe('CURRENT_USER_UPDATE', this.handleMaybeOpenModal);
    }
    _terminate() {
        l.Z.unsubscribe('POST_CONNECTION_OPEN', this.handleMaybeOpenModal), l.Z.unsubscribe('CURRENT_USER_UPDATE', this.handleMaybeOpenModal), null != this.timeout && (clearTimeout(this.timeout), (this.timeout = null));
    }
    constructor(...e) {
        super(...e),
            m(this, 'timeout', null),
            m(this, 'handleMaybeOpenModal', () => {
                var e, t;
                let n = o.default.getCurrentUser(),
                    i = null == n ? void 0 : null === (e = n.avatarDecoration) || void 0 === e ? void 0 : e.skuId,
                    r = null == n ? void 0 : null === (t = n.avatarDecoration) || void 0 === t ? void 0 : t.expiresAt;
                if ((('1251324401459265537' === i || '1252353273256480818' === i) && (r = 1726106879), null != r && !!(0, u.v)('CollectiblesExpiryManager'))) !this.maybeOpenModal() && (null != this.timeout && clearTimeout(this.timeout), (this.timeout = setTimeout(this.maybeOpenModal, 1000 * r - Date.now() + 1000)));
            }),
            m(this, 'maybeOpenModal', () => {
                var e, t, l, a, u;
                let m = o.default.getCurrentUser(),
                    g = s.Z.getState(),
                    f = null == m ? void 0 : null === (e = m.avatarDecoration) || void 0 === e ? void 0 : e.skuId,
                    _ = null == m ? void 0 : null === (t = m.avatarDecoration) || void 0 === t ? void 0 : t.expiresAt;
                if ((('1251324401459265537' === f || '1252353273256480818' === f) && (_ = 1726106879), null == m)) return !1;
                let E = c.Z.getVoiceStateForUser(m.id);
                return null != _ && 1000 * _ < Date.now() && g !== h.hes.RTC_CONNECTED
                    ? ((0, r.closeModal)(p),
                      (0, r.openModalLazy)(
                          async () => {
                              let { default: e } = await n.e('77370').then(n.bind(n, 83950));
                              return (t) =>
                                  (0, i.jsx)(e, {
                                      ...t,
                                      skuId: f
                                  });
                          },
                          { modalKey: p }
                      ),
                      d.Z.captureMessage('Collectible expiry modal shown'),
                      !0)
                    : (('1251324401459265537' === f || '1252353273256480818' === f) &&
                          d.Z.captureMessage('Collectible expiry modal not shown', {
                              tags: {
                                  isExpired: (null != _ && 1000 * _ < Date.now()).toString(),
                                  rtcConnected: (g === h.hes.RTC_CONNECTED).toString(),
                                  decoExpiresAt: null !== (a = null == _ ? void 0 : _.toString()) && void 0 !== a ? a : 'N/A',
                                  voiceStateAvailable: (null != E).toString(),
                                  selfStream: null !== (u = null == E ? void 0 : null === (l = E.selfStream) || void 0 === l ? void 0 : l.toString()) && void 0 !== u ? u : 'N/A'
                              }
                          }),
                      !1);
            });
    }
}
t.Z = new g();
