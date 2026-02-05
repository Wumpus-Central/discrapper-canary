"use strict";
function r() {
    return "u" > typeof globalThis
        ? globalThis
        : "u" > typeof window
          ? window
          : void 0 !== n.g
            ? n.g
            : "u" > typeof self
              ? self
              : Object.create(null);
}
n.d(t, { V: () => r });
