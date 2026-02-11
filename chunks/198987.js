i.d(t, { t: () => S });
var n = i(64700),
    l = i(311907),
    s = i(419954),
    r = i(933297),
    a = i(803224),
    u = i(780964),
    o = i(840065),
    d = i(856134),
    _ = i(662128),
    T = i(811231),
    A = i(985018);
let S = (0, s.zZ)(u.X.SOUNDS_CATEGORY, {
    useTitle: () => A.intl.string(A.t.MKWyKc),
    useInlineNotice: function () {
        let e = (0, l.bG)([a.A], () => a.A.getDisableAllSounds());
        return n.useMemo(() => {
            if (e)
                return {
                    type: r.lT.INLINE_NOTICE,
                    noticeType: "warning",
                    useText: () =>
                        A.intl.format(A.t.fRvixS, {
                            onClick: () => (0, o.openUserSettings)(u.X.NOTIFICATIONS_SOUNDS_CATEGORY),
                        }),
                };
        }, [e]);
    },
    buildLayout: () => [T.Y, d.F, _.D],
});
