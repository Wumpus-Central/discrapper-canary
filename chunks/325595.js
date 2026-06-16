"use strict";
n.d(t, { p: () => r });
var i = n(651162);
class r {
    title;
    body;
    mobileBackgroundImage;
    mobileForegroundImage;
    desktopBackgroundImage;
    constructor(e) {
        (this.type = i.g.FRAMES_BANNER),
            (this.title = e.title),
            (this.body = e.body),
            (this.mobileBackgroundImage = e.mobile_background_image),
            (this.mobileForegroundImage = e.mobile_foreground_image),
            (this.desktopBackgroundImage = e.desktop_background_image);
    }
    static fromServer(e) {
        return new r(e);
    }
}
