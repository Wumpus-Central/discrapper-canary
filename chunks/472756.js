n.d(t, { G: () => o });
var r = n(685816);
function i(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
class o {
    static fromServer(e) {
        return new o(e);
    }
    constructor(e) {
        (i(this, 'title', void 0), i(this, 'body', void 0), i(this, 'bannerUrl', void 0), i(this, 'endTime', void 0), i(this, 'textColor', void 0), (this.type = r.z.COUNTDOWN_TIMER), (this.title = e.title), (this.body = e.body), (this.bannerUrl = e.banner_url), (this.endTime = new Date(e.end_time)), (this.textColor = e.text_color));
    }
}
