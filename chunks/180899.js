n.d(t, { Z: () => c }), n(47120);
var r = n(192379),
    a = n(512722),
    i = n.n(a),
    o = n(157925),
    l = n(765305);
function c(e) {
    let { stageInstance: t, defaultStep: n, error: a, onSave: c } = e,
        [s, d] = r.useState(n),
        [u, _] = r.useState(),
        [m, b] = r.useState(null);
    return (
        r.useEffect(() => {
            null != a && d(o.lv.STAGE_CHANNEL_SETTINGS);
        }, [a]),
        {
            modalStep: s,
            setModalStep: d,
            readySlide: m,
            handleSlideReady: function (e) {
                return b(e);
            },
            savedOptions: u,
            handleSettingsSave: function (e) {
                if ((_(e), e.privacyLevel === l.j8.PUBLIC && (null == t ? void 0 : t.privacy_level) !== l.j8.PUBLIC)) {
                    d(o.lv.PUBLIC_STAGE_PREVIEW);
                    return;
                }
                c(e);
            },
            handleDelayedSave: function () {
                i()(null != u, 'Must have some saved options.'), c(u);
            }
        }
    );
}
