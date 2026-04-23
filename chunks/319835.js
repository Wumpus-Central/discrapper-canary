"use strict";
n.d(t, { z: () => i });
var r = n(651162);
class i {
    title;
    body;
    bannerUrl;
    endTime;
    textColor;
    constructor(e) {
        (this.type = r.g.COUNTDOWN_TIMER),
            (this.title = e.title),
            (this.body = e.body),
            (this.bannerUrl = e.banner_url),
            (this.endTime = new Date(e.end_time)),
            (this.textColor = e.text_color);
    }
    static fromServer(e) {
        return new i(e);
    }
}
