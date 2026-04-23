n.d(t, { Ay: () => o, C3: () => s, HL: () => l });
var i,
    r = n(575593),
    a = n(149807),
    l = (((i = {}).FromLoop = "fromLoop"), (i.FromStart = "fromStart"), i);
let s = (e) => e instanceof o;
class o extends a.A {
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
