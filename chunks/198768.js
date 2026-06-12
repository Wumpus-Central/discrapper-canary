"use strict";
n.d(t, { L: () => i });
class i extends Set {
    constructor(e, t, n) {
        super(e),
            e instanceof i
                ? ((this.anchorKey = null != t ? t : e.anchorKey), (this.currentKey = null != n ? n : e.currentKey))
                : ((this.anchorKey = null != t ? t : null), (this.currentKey = null != n ? n : null));
    }
}
