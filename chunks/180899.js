t.d(n, { Z: () => s }), t(47120);
var l = t(192379),
    i = t(512722),
    r = t.n(i),
    a = t(157925),
    o = t(765305);
function s(e) {
    let { stageInstance: n, defaultStep: t, error: i, onSave: s } = e,
        [c, d] = l.useState(t),
        [u, m] = l.useState(),
        [_, h] = l.useState(null);
    return (
        l.useEffect(() => {
            null != i && d(a.lv.STAGE_CHANNEL_SETTINGS);
        }, [i]),
        {
            modalStep: c,
            setModalStep: d,
            readySlide: _,
            handleSlideReady: function (e) {
                return h(e);
            },
            savedOptions: u,
            handleSettingsSave: function (e) {
                if ((m(e), e.privacyLevel === o.j8.PUBLIC && (null == n ? void 0 : n.privacy_level) !== o.j8.PUBLIC)) {
                    d(a.lv.PUBLIC_STAGE_PREVIEW);
                    return;
                }
                s(e);
            },
            handleDelayedSave: function () {
                r()(null != u, 'Must have some saved options.'), s(u);
            }
        }
    );
}
