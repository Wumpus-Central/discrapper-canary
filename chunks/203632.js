"use strict";
n.d(t, { Ay: () => l, C3: () => o, HL: () => a });
var i,
    r = n(575593),
    s = n(149807),
    a = (((i = {}).FromLoop = "fromLoop"), (i.FromStart = "fromStart"), i);
let o = (e) => e instanceof l;
class l extends s.A {
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
        return new l({ ...super.fromServer(e), ...e });
    }
}
