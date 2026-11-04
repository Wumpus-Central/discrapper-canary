var s = n(299855),
    l = n.n(s),
    i = n(77729),
    a = n(723702);
let o = /\{65E8773D-8F56-11D0-A3B9-00A0C9223196\}/i;
n.d(
    t,
    {},
    {
        i: function (e) {
            return (0, a.uo)() === a.fg.WINDOWS
                ? "ms-settings:camera" +
                      (null != e
                          ? `?cameraId=${encodeURIComponent(e.replace(o, "{E5323777-F976-4f5b-9B55-B94699C46E44}"))}`
                          : "")
                : "";
        },
        p: function () {
            return !!(0, a.uF)() && !!a.isPlatformEmbedded && l().satisfies(i.A.os.release, ">=10.0.22000");
        },
    },
);
