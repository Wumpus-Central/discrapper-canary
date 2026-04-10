n.d(t, { h: () => _ }), n(321073);
var i = n(64700),
    s = n(311907),
    l = n(55619),
    r = n(589051),
    a = n(295102),
    o = n(419954),
    d = n(351906),
    c = n(780964),
    u = n(17460),
    m = n(985018);
let g = [],
    _ = (0, o.Hn)(c.X.STREAMER_MODE_HIDE_OVERLAY_WIDGETS, {
        selectionMode: "multiple",
        useTitle: () => m.intl.string(m.t.VCDSLW),
        useSearchTerms: () => [m.intl.string(m.t.VCDSLW)],
        usePredicate: () => {
            let e = (0, u.b_)(),
                t = (0, r.Mn)("StreamerModeSettings");
            return e && t;
        },
        useOptions: function () {
            return i.useMemo(() => {
                let e = [];
                for (let [t, n] of Object.entries(a.A))
                    null != n.streamerModeLabel &&
                        (null == n.predicate || n.predicate()) &&
                        e.push({ id: t, value: t, label: n.streamerModeLabel() });
                return e;
            }, []);
        },
        useValue: function () {
            return (0, s.bG)([d.A], () => d.A.getSettings().disabledOverlayWidgets ?? g);
        },
        setValue: (e) => l.A.update({ disabledOverlayWidgets: e }),
        closeOnSelect: !1,
        wrapTags: !0,
    });
