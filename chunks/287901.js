e.exports = function (e) {
    var t = [];
    return e.shiftKey && t.push('shift'), e.altKey && t.push('alt'), e.ctrlKey && t.push('ctrl'), e.metaKey && t.push('meta'), t;
};
