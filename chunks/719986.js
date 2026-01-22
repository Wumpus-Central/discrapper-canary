function r(e, t, n) {
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
n.d(t, {
    M: () => i,
});
class i {
    static fromServer(e) {
        return new i(e);
    }
    toDesktopStyles() {
        let e = {};
        return (
            null != this.desktopMaxHeight && (e.maxHeight = this.desktopMaxHeight),
            null != this.backgroundStyle && (e.background = this.backgroundStyle),
            Object.keys(e).length > 0 ? e : void 0
        );
    }
    toMobileStyles() {
        let e = {};
        return (
            null != this.mobileMaxHeight && (e.maxHeight = this.mobileMaxHeight),
            null != this.backgroundStyle && (e.background = this.backgroundStyle),
            Object.keys(e).length > 0 ? e : void 0
        );
    }
    constructor(e) {
        r(this, "desktopMaxHeight", void 0),
            r(this, "mobileMaxHeight", void 0),
            r(this, "responsive", void 0),
            r(this, "backgroundStyle", void 0),
            (this.desktopMaxHeight = e.desktop_max_height),
            (this.mobileMaxHeight = e.mobile_max_height),
            (this.responsive = e.responsive),
            (this.backgroundStyle = e.background_style);
    }
}
