"use strict";
n.d(t, { Ay: () => o, C3: () => a, HL: () => s });
var r = n(575593),
    i = n(149807),
    s = (function (e) {
        return (e.FromLoop = "fromLoop"), (e.FromStart = "fromStart"), e;
    })({});
let a = (e) => e instanceof o;
class o extends i.A {
    title;
    description;
    accessibilityLabel;
    reducedMotionSrc;
    thumbnailPreviewSrc;
    effects;
    animationType;
    staticFrameSrc;
    constructor(e) {
        super(e),
            (this.type = r.R.PROFILE_EFFECT),
            (this.title = e.title),
            (this.description = e.description),
            (this.accessibilityLabel = e.accessibilityLabel),
            (this.reducedMotionSrc = e.reducedMotionSrc),
            (this.thumbnailPreviewSrc = e.thumbnailPreviewSrc),
            (this.effects = e.effects),
            (this.animationType = e.animationType),
            (this.staticFrameSrc = e.staticFrameSrc);
    }
    static fromServer(e) {
        return new o({ ...super.fromServer(e), ...e });
    }
}
