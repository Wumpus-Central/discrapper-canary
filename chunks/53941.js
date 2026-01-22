n.d(t, { A: () => a });
var r = n(651162);
function i(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
class a {
    static fromServer(e) {
        return new a(e);
    }
    constructor(e) {
        i(this, "title", void 0),
            i(this, "body", void 0),
            i(this, "helpCenterUrl", void 0),
            i(this, "textColor", void 0),
            i(this, "endTime", void 0),
            i(this, "bannerUrl", void 0),
            i(this, "bannerAnimatedUrl", void 0),
            (this.type = r.g.IMMERSIVE_BANNER),
            (this.title = e.title),
            (this.body = e.body),
            (this.helpCenterUrl = e.help_center_url),
            (this.textColor = e.text_color),
            (this.endTime = null != e.end_time ? new Date(e.end_time) : void 0),
            (this.bannerUrl = e.banner_url),
            (this.bannerAnimatedUrl = e.banner_animated_url);
    }
}
