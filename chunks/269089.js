n.d(t, { Z: () => m }), n(47120);
var r = n(200651);
n(192379);
var i = n(570140),
    l = n(765250),
    o = n(317770),
    a = n(663993),
    s = n(355863),
    c = n(788983),
    u = n(981631);
n(687366);
let d = (0, a.Un)({
        createPromise: () => n.e('80960').then(n.bind(n, 223455)),
        webpackId: 223455,
        name: 'PopoutWindowChannelCall'
    }),
    p = (0, a.Un)({
        createPromise: () => n.e('20176').then(n.bind(n, 432472)),
        webpackId: 432472,
        name: 'PopoutWindowStageChannelCall'
    }),
    h = (0, a.Un)({
        createPromise: () => n.e('80960').then(n.bind(n, 945778)),
        webpackId: 945778,
        name: 'PopoutWindowRTCDebug'
    }),
    f = (0, a.Un)({
        createPromise: () => Promise.all([n.e('93382'), n.e('92922'), n.e('37874'), n.e('27278')]).then(n.bind(n, 748623)),
        webpackId: 748623,
        name: 'PopoutWindowActivity'
    });
class g extends o.Z {
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
                    ? (0, r.jsx)(p, {
                          windowKey: e,
                          channelId: t.id
                      })
                    : (0, r.jsx)(d, {
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
        c.bA(u.KJ3.RTC_DEBUG_POPOUT, (e) => (0, r.jsx)(h, { windowKey: e }), {
            defaultWidth: 854,
            defaultHeight: 480
        });
    }
    async handleOpenActivityPopout() {
        let { OVERLAY_V3_LAYOUT_ID: e } = await Promise.resolve().then(n.bind(n, 501787));
        (0, l.te)(e, s.Z.getDefaultLayout(e, 1), 1),
            c.bA(u.KJ3.ACTIVITY_POPOUT, (e) => (0, r.jsx)(f, { windowKey: e }), {
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
let m = new g();
