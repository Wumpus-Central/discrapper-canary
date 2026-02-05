"use strict";
var r = n(227106);
e.exports = function (e) {
    return null === e
        ? "Null"
        : void 0 === e
          ? "Undefined"
          : r(e)
            ? "Object"
            : "number" == typeof e
              ? "Number"
              : "boolean" == typeof e
                ? "Boolean"
                : "string" == typeof e
                  ? "String"
                  : void 0;
};
