var i = n(723702),
    r = n(652215);
n.d(
    t,
    {},
    {
        O: function () {
            switch ((0, i.uo)()) {
                case i.fg.WINDOWS:
                    let e = "x86";
                    if (
                        (null != window.DiscordNative && (e = window.DiscordNative.os.arch),
                        "x86" === e || "ia32" === e)
                    )
                        return r.lM6.WIN32;
                    return r.lM6.WIN64;
                case i.fg.OSX:
                    return r.lM6.MACOS;
                case i.fg.LINUX:
                    return r.lM6.LINUX;
                default:
                    throw Error("Unsupported build type");
            }
        },
    },
);
