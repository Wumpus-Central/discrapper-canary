i.d(e, { t: () => E });
var n = i(64700),
    l = i(311907),
    s = i(419954),
    r = i(933297),
    a = i(803224),
    u = i(780964),
    o = i(840065),
    d = i(856134),
    T = i(662128),
    A = i(811231),
    S = i(985018);
let E = (0, s.zZ)(u.X.SOUNDS_CATEGORY, {
    useTitle: () => S.intl.string(S.t.MKWyKc),
    useInlineNotice: function () {
        let t = (0, l.bG)([a.A], () => a.A.getDisableAllSounds());
        return n.useMemo(() => {
            if (t)
                return {
                    type: r.W.INLINE_NOTICE,
                    noticeType: "warning",
                    useText: () =>
                        S.intl.format(S.t.fRvixS, {
                            onClick: () => (0, o.openUserSettings)(u.X.NOTIFICATIONS_SOUNDS_CATEGORY),
                        }),
                };
        }, [t]);
    },
    buildLayout: () => [A.Y, d.F, T.D],
});
