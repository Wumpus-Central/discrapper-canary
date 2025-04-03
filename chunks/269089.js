n.d(t, { Z: () => b }), n(47120);
var r = n(200651),
    i = n(570140),
    l = n(765250),
    a = n(317770),
    o = n(663993),
    s = n(355863),
    c = n(788983),
    u = n(981631),
    d = n(757744);
n(442122);
let p = (0, o.Un)({
        createPromise: () => n.e('80960').then(n.bind(n, 223455)),
        webpackId: 223455,
        name: 'PopoutWindowChannelCall'
    }),
    h = (0, o.Un)({
        createPromise: () => n.e('20176').then(n.bind(n, 432472)),
        webpackId: 432472,
        name: 'PopoutWindowStageChannelCall'
    }),
    f = (0, o.Un)({
        createPromise: () => n.e('80960').then(n.bind(n, 945778)),
        webpackId: 945778,
        name: 'PopoutWindowRTCDebug'
    }),
    g = (0, o.Un)({
        createPromise: () => Promise.all([n.e('28543'), n.e('89298'), n.e('27278')]).then(n.bind(n, 748623)),
        webpackId: 748623,
        name: 'PopoutWindowActivity'
    });
class m extends a.Z {
    _initialize() {
        i.Z.subscribe('CHANNEL_CALL_POPOUT_WINDOW_OPEN', this.handleOpenChannelCallPopout), i.Z.subscribe('RTC_DEBUG_POPOUT_WINDOW_OPEN', this.handleOpenRTCDebugPopout), i.Z.subscribe('ACTIVITY_POPOUT_WINDOW_OPEN', this.handleOpenActivityPopout), this.initializeStyleSheetObserver();
    }
    _terminate() {
        i.Z.unsubscribe('CHANNEL_CALL_POPOUT_WINDOW_OPEN', this.handleOpenChannelCallPopout), i.Z.unsubscribe('RTC_DEBUG_POPOUT_WINDOW_OPEN', this.handleOpenRTCDebugPopout), i.Z.unsubscribe('ACTIVITY_POPOUT_WINDOW_OPEN', this.handleOpenActivityPopout), this.terminateStyleSheetObserver();
    }
    handleOpenChannelCallPopout(e) {
        let { channel: t } = e;
        c.bA(
            u.KJ3.CHANNEL_CALL_POPOUT,
            (e) =>
                t.isGuildStageVoice()
                    ? (0, r.jsx)(h, {
                          windowKey: e,
                          channelId: t.id
                      })
                    : (0, r.jsx)(p, {
                          windowKey: e,
                          channelId: t.id
                      }),
            {
                defaultWidth: 854,
                defaultHeight: 480
            }
        );
    }
    initializeStyleSheetObserver() {
        (this._observer = new MutationObserver(function (e) {
            for (let t of e)
                if ('childList' === t.type) {
                    for (let e of t.addedNodes)
                        if (e.nodeType === Node.ELEMENT_NODE && 'LINK' === e.tagName && 'stylesheet' === e.rel) {
                            let t = e.href,
                                n = e.integrity;
                            c.YS(t, n);
                        }
                }
        })),
            this._observer.observe(document.head, { childList: !0 });
    }
    terminateStyleSheetObserver() {
        null != this._observer && (this._observer.disconnect(), (this._observer = null));
    }
    handleOpenRTCDebugPopout() {
        c.bA(u.KJ3.RTC_DEBUG_POPOUT, (e) => (0, r.jsx)(f, { windowKey: e }), {
            defaultWidth: 854,
            defaultHeight: 480
        });
    }
    handleOpenActivityPopout() {
        (0, l.te)(d.$, s.Z.getDefaultLayout(d.$, d.H), d.H),
            c.bA(u.KJ3.ACTIVITY_POPOUT, (e) => (0, r.jsx)(g, { windowKey: e }), {
                defaultWidth: 854,
                defaultHeight: 480
            });
    }
    constructor(...e) {
        var t;
        super(...e),
            (t = '_observer') in this
                ? Object.defineProperty(this, t, {
                      value: null,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0
                  })
                : (this[t] = null);
    }
}
let b = new m();
