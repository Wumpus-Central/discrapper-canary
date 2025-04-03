e.exports = function (e) {
    if (e.stopPropagation) return void e.stopPropagation();
    e.cancelBubble = !0;
};
