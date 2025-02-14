n.d(t, { Z: () => _ }), n(47120);
var i = n(200651),
    l = n(481060),
    r = n(570140),
    a = n(317770),
    s = n(19780),
    o = n(594174),
    d = n(979651),
    c = n(960048),
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
        r.Z.subscribe('POST_CONNECTION_OPEN', this.handleMaybeOpenModal), r.Z.subscribe('CURRENT_USER_UPDATE', this.handleMaybeOpenModal);
    }
    _terminate() {
        r.Z.unsubscribe('POST_CONNECTION_OPEN', this.handleMaybeOpenModal), r.Z.unsubscribe('CURRENT_USER_UPDATE', this.handleMaybeOpenModal), null != this.timeout && (clearTimeout(this.timeout), (this.timeout = null));
    }
    constructor(...e) {
        super(...e),
            m(this, 'timeout', null),
            m(this, 'handleMaybeOpenModal', () => {
                var e, t;
                let n = o.default.getCurrentUser(),
                    i = null == n ? void 0 : null === (e = n.avatarDecoration) || void 0 === e ? void 0 : e.skuId,
                    l = null == n ? void 0 : null === (t = n.avatarDecoration) || void 0 === t ? void 0 : t.expiresAt;
                ('1251324401459265537' === i || '1252353273256480818' === i) && (l = 1726106879), null != l && (0, u.v)('CollectiblesExpiryManager') && (this.maybeOpenModal() || (null != this.timeout && clearTimeout(this.timeout), (this.timeout = setTimeout(this.maybeOpenModal, 1000 * l - Date.now() + 1000))));
            }),
            m(this, 'maybeOpenModal', () => {
                var e, t, r, a, u;
                let m = o.default.getCurrentUser(),
                    g = s.Z.getState(),
                    _ = null == m ? void 0 : null === (e = m.avatarDecoration) || void 0 === e ? void 0 : e.skuId,
                    f = null == m ? void 0 : null === (t = m.avatarDecoration) || void 0 === t ? void 0 : t.expiresAt;
                if ((('1251324401459265537' === _ || '1252353273256480818' === _) && (f = 1726106879), null == m)) return !1;
                let E = d.Z.getVoiceStateForUser(m.id);
                return null != f && 1000 * f < Date.now() && g !== h.hes.RTC_CONNECTED
                    ? ((0, l.Mr3)(p),
                      (0, l.ZDy)(
                          async () => {
                              let { default: e } = await n.e('77370').then(n.bind(n, 83950));
                              return (t) =>
                                  (0, i.jsx)(e, {
                                      ...t,
                                      skuId: _
                                  });
                          },
                          { modalKey: p }
                      ),
                      c.Z.captureMessage('Collectible expiry modal shown'),
                      !0)
                    : (('1251324401459265537' === _ || '1252353273256480818' === _) &&
                          c.Z.captureMessage('Collectible expiry modal not shown', {
                              tags: {
                                  isExpired: (null != f && 1000 * f < Date.now()).toString(),
                                  rtcConnected: (g === h.hes.RTC_CONNECTED).toString(),
                                  decoExpiresAt: null !== (a = null == f ? void 0 : f.toString()) && void 0 !== a ? a : 'N/A',
                                  voiceStateAvailable: (null != E).toString(),
                                  selfStream: null !== (u = null == E ? void 0 : null === (r = E.selfStream) || void 0 === r ? void 0 : r.toString()) && void 0 !== u ? u : 'N/A'
                              }
                          }),
                      !1);
            });
    }
}
let _ = new g();
