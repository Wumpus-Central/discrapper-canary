"use strict";
var i = n(227106);
e.exports = function (e) {
    return null === e
        ? "Null"
        : void 0 === e
          ? "Undefined"
          : i(e)
            ? "Object"
            : "number" == typeof e
              ? "Number"
              : "boolean" == typeof e
                ? "Boolean"
                : "string" == typeof e
                  ? "String"
                  : void 0;
};
