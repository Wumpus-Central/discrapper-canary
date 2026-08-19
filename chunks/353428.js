"use strict";
r.d(t, { L: () => n });
class n extends Set {
    constructor(e, t, r) {
        super(e),
            e instanceof n
                ? ((this.anchorKey = null != t ? t : e.anchorKey), (this.currentKey = null != r ? r : e.currentKey))
                : ((this.anchorKey = null != t ? t : null), (this.currentKey = null != r ? r : null));
    }
}
