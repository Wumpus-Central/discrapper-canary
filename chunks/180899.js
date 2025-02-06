t.d(n, { Z: () => o }), t(47120);
var l = t(192379),
    i = t(512722),
    a = t.n(i),
    r = t(157925),
    s = t(765305);
function o(e) {
    let { stageInstance: n, defaultStep: t, error: i, onSave: o } = e,
        [c, d] = l.useState(t),
        [u, m] = l.useState(),
        [_, x] = l.useState(null);
    return (
        l.useEffect(() => {
            null != i && d(r.lv.STAGE_CHANNEL_SETTINGS);
        }, [i]),
        {
            modalStep: c,
            setModalStep: d,
            readySlide: _,
            handleSlideReady: function (e) {
                return x(e);
            },
            savedOptions: u,
            handleSettingsSave: function (e) {
                if ((m(e), e.privacyLevel === s.j8.PUBLIC && (null == n ? void 0 : n.privacy_level) !== s.j8.PUBLIC)) {
                    d(r.lv.PUBLIC_STAGE_PREVIEW);
                    return;
                }
                o(e);
            },
            handleDelayedSave: function () {
                a()(null != u, 'Must have some saved options.'), o(u);
            }
        }
    );
}
