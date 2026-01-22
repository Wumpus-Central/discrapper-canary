i.d(e, {
    o: () => A,
});
var n = i(955572),
    l = i(775602),
    s = i(419954),
    r = i(253932),
    u = i(780964),
    a = i(381941),
    o = i(985018);
let T = (t) => "".concat(t.toFixed(0), "px"),
    A = (0, s.sN)(u.X.APPEARANCE_MESSAGE_GROUP_SPACING, {
        useTitle: () => o.intl.string(o.t.Q6lKkg),
        useSubtitle: () => o.intl.string(o.t.p7eUrb),
        markers: a.qh,
        stickToMarkers: !0,
        minValue: a.qh["0"],
        maxValue: a.qh[a.qh.length - 1],
        useDefaultValue: () => (r.hH.useSetting() ? a.y5 : a.ES),
        getInitialValue: () => {
            let t = l.A.messageGroupSpacing,
                e = r.hH.getSetting();
            return null != t ? t : e ? a.y5 : a.ES;
        },
        onValueRender: T,
        onMarkerRender: T,
        setValue: (t) => {
            switch (t) {
                case 0:
                case 4:
                case 8:
                case 16:
                case 24:
                    (0, n.AC)(t);
            }
        },
    });
