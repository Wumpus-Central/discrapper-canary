"use strict";
n.d(t, { p: () => i });
var r = n(651162);
class i {
    title;
    body;
    mobileBackgroundImage;
    mobileForegroundImage;
    constructor(e) {
        (this.type = r.g.FRAMES_BANNER),
            (this.title = e.title),
            (this.body = e.body),
            (this.mobileBackgroundImage = e.mobile_background_image),
            (this.mobileForegroundImage = e.mobile_foreground_image);
    }
    static fromServer(e) {
        return new i(e);
    }
}
