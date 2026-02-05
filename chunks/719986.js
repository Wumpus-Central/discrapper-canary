"use strict";
n.d(t, { M: () => r });
class r {
    desktopMaxHeight;
    mobileMaxHeight;
    responsive;
    backgroundStyle;
    constructor(e) {
        (this.desktopMaxHeight = e.desktop_max_height),
            (this.mobileMaxHeight = e.mobile_max_height),
            (this.responsive = e.responsive),
            (this.backgroundStyle = e.background_style);
    }
    static fromServer(e) {
        return new r(e);
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
}
