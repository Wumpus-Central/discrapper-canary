(n.d(t, { Z: () => s }), n(388685));
var r = n(73800),
    i = n(512722),
    l = n.n(i),
    a = n(157925),
    o = n(765305);
function s(e) {
    let { stageInstance: t, defaultStep: n, error: i, onSave: s } = e,
        [c, d] = r.useState(n),
        [u, h] = r.useState(),
        [g, _] = r.useState(null);
    return (
        r.useEffect(() => {
            null != i && d(a.lv.STAGE_CHANNEL_SETTINGS);
        }, [i]),
        {
            modalStep: c,
            setModalStep: d,
            readySlide: g,
            handleSlideReady: function (e) {
                return _(e);
            },
            savedOptions: u,
            handleSettingsSave: function (e) {
                if ((h(e), e.privacyLevel === o.j8.PUBLIC && (null == t ? void 0 : t.privacy_level) !== o.j8.PUBLIC)) return void d(a.lv.PUBLIC_STAGE_PREVIEW);
                s(e);
            },
            handleDelayedSave: function () {
                (l()(null != u, 'Must have some saved options.'), s(u));
            }
        }
    );
}
