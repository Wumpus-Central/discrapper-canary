n.d(t, { h: () => _ }), n(321073);
var i = n(64700),
    s = n(311907),
    l = n(55619),
    a = n(589051),
    r = n(295102),
    o = n(419954),
    d = n(351906),
    u = n(780964),
    c = n(17460),
    g = n(985018);
let m = [],
    _ = (0, o.Hn)(u.X.STREAMER_MODE_HIDE_OVERLAY_WIDGETS, {
        selectionMode: "multiple",
        useTitle: () => g.intl.string(g.t.VCDSLW),
        useSearchTerms: () => [g.intl.string(g.t.VCDSLW)],
        usePredicate: () => {
            let e = (0, c.b_)(),
                t = (0, a.Mn)("StreamerModeSettings");
            return e && t;
        },
        useOptions: function () {
            return i.useMemo(() => {
                let e = [];
                for (let [t, n] of Object.entries(r.A))
                    null != n.streamerModeLabel &&
                        (null == n.predicate || n.predicate()) &&
                        e.push({ id: t, value: t, label: n.streamerModeLabel() });
                return e;
            }, []);
        },
        useValue: function () {
            return (0, s.bG)([d.A], () => d.A.getSettings().disabledOverlayWidgets ?? m);
        },
        setValue: (e) => l.A.update({ disabledOverlayWidgets: e }),
        closeOnSelect: !1,
        wrapTags: !0,
    });
