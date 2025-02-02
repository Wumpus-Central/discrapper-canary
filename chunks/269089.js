n.d(t, { Z: () => _ }), n(47120);
var i = n(200651);
n(192379);
var l = n(570140),
    r = n(765250),
    a = n(317770),
    s = n(663993),
    o = n(355863),
    c = n(788983),
    d = n(981631);
n(378481);
let u = (0, s.Un)({
        createPromise: () => n.e('80960').then(n.bind(n, 223455)),
        webpackId: 223455,
        name: 'PopoutWindowChannelCall'
    }),
    h = (0, s.Un)({
        createPromise: () => n.e('20176').then(n.bind(n, 432472)),
        webpackId: 432472,
        name: 'PopoutWindowStageChannelCall'
    }),
    m = (0, s.Un)({
        createPromise: () => n.e('80960').then(n.bind(n, 945778)),
        webpackId: 945778,
        name: 'PopoutWindowRTCDebug'
    }),
    p = (0, s.Un)({
        createPromise: () => Promise.all([n.e('93382'), n.e('92922'), n.e('33179'), n.e('27278')]).then(n.bind(n, 748623)),
        webpackId: 748623,
        name: 'PopoutWindowActivity'
    });
class g extends a.Z {
    _initialize() {
        l.Z.subscribe('CHANNEL_CALL_POPOUT_WINDOW_OPEN', this.handleOpenChannelCallPopout), l.Z.subscribe('RTC_DEBUG_POPOUT_WINDOW_OPEN', this.handleOpenRTCDebugPopout), l.Z.subscribe('ACTIVITY_POPOUT_WINDOW_OPEN', this.handleOpenActivityPopout), this.initializeStyleSheetObserver();
    }
    _terminate() {
        l.Z.unsubscribe('CHANNEL_CALL_POPOUT_WINDOW_OPEN', this.handleOpenChannelCallPopout), l.Z.unsubscribe('RTC_DEBUG_POPOUT_WINDOW_OPEN', this.handleOpenRTCDebugPopout), l.Z.unsubscribe('ACTIVITY_POPOUT_WINDOW_OPEN', this.handleOpenActivityPopout), this.terminateStyleSheetObserver();
    }
    handleOpenChannelCallPopout(e) {
        let { channel: t } = e;
        c.bA(
            d.KJ3.CHANNEL_CALL_POPOUT,
            (e) =>
                t.isGuildStageVoice()
                    ? (0, i.jsx)(h, {
                          windowKey: e,
                          channelId: t.id
                      })
                    : (0, i.jsx)(u, {
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
        c.bA(d.KJ3.RTC_DEBUG_POPOUT, (e) => (0, i.jsx)(m, { windowKey: e }), {
            defaultWidth: 854,
            defaultHeight: 480
        });
    }
    async handleOpenActivityPopout() {
        let { OVERLAY_V3_LAYOUT_ID: e } = await Promise.resolve().then(n.bind(n, 501787));
        (0, r.te)(e, o.Z.getDefaultLayout(e, 1), 1),
            c.bA(d.KJ3.ACTIVITY_POPOUT, (e) => (0, i.jsx)(p, { windowKey: e }), {
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
let _ = new g();
