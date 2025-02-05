t.d(n, { Z: () => o }), t(47120);
var l = t(192379),
    i = t(512722),
    r = t.n(i),
    a = t(157925),
    s = t(765305);
function o(e) {
    let { stageInstance: n, defaultStep: t, error: i, onSave: o } = e,
        [c, d] = l.useState(t),
        [u, _] = l.useState(),
        [m, h] = l.useState(null);
    return (
        l.useEffect(() => {
            null != i && d(a.lv.STAGE_CHANNEL_SETTINGS);
        }, [i]),
        {
            modalStep: c,
            setModalStep: d,
            readySlide: m,
            handleSlideReady: function (e) {
                return h(e);
            },
            savedOptions: u,
            handleSettingsSave: function (e) {
                if ((_(e), e.privacyLevel === s.j8.PUBLIC && (null == n ? void 0 : n.privacy_level) !== s.j8.PUBLIC)) {
                    d(a.lv.PUBLIC_STAGE_PREVIEW);
                    return;
                }
                o(e);
            },
            handleDelayedSave: function () {
                r()(null != u, 'Must have some saved options.'), o(u);
            }
        }
    );
}
