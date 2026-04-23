"use strict";
n.d(t, { A: () => i });
var r = n(723702);
function i() {
    let e = "";
    return (
        (0, r.isWindows)()
            ? (e = "platform-win")
            : (0, r.isMac)()
              ? (e = "platform-osx")
              : (0, r.isLinux)()
                ? (e = "platform-linux")
                : (0, r.isWeb)() && (e = "platform-web"),
        __OVERLAY__ ? `${e} platform-overlay` : e
    );
}
