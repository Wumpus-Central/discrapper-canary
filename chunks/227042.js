var i = n(652215);
n.d(
    t,
    {},
    {
        A: function (e) {
            let { LayerStore: t, PopoutWindowStore: n } = e,
                r = t.hasLayers(),
                l = n.getWindowOpen(i.MLl.CHANNEL_CALL_POPOUT) || n.getWindowOpen(i.MLl.ACTIVITY_POPOUT);
            return r && !l;
        },
    },
);
