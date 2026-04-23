n.d(t, { r: () => g });
var i = n(574381),
    s = n(311907),
    l = n(314116),
    a = n(827343),
    r = n(77729),
    o = n(419954),
    d = n(430452),
    u = n(780964),
    c = n(985018);
let g = (0, o.zD)(u.X.STREAMING_OS_MENU_SCREEN_CAPTURE, {
    useTitle: () => c.intl.string(c.t.lt8rRx),
    useSubtitle: () => c.intl.string(c.t.ie1mgY),
    useValue: function () {
        return (0, s.bG)([d.Ay], () => d.Ay.getUseSystemScreensharePicker());
    },
    setValue: function (e) {
        (0, i.cX)() && e
            ? (0, l.A)({
                  title: c.intl.string(c.t["9jf31O"]),
                  subtitle: c.intl.string(c.t.uBd6JW),
                  variant: "primary",
                  onConfirm: () => {
                      a.A.setUseSystemScreensharePicker(e), r.A.app.relaunch();
                  },
                  confirmText: c.intl.string(c.t.BddRzS),
              })
            : a.A.setUseSystemScreensharePicker(e);
    },
    usePredicate: function () {
        return (0, s.bG)([d.Ay], () => d.Ay.supportsSystemScreensharePicker() && (0, i.cX)());
    },
});
