"use strict";
function r(e) {
    return null == e
        ? e
        : { country: e.country, setAt: e.set_at ?? e.setAt ?? null, isLocked: e.is_locked ?? e.isLocked ?? !1 };
}
n.d(t, { P: () => r });
